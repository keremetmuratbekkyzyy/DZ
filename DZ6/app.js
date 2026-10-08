const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

function activateSlide(selectedSlide) {
    slides.forEach(function (slide) {
        const isActive = slide === selectedSlide;
        slide.classList.toggle("active", isActive);
        slide.setAttribute("aria-expanded", isActive);
    });

    const collapsedWidth = getComputedStyle(slider).getPropertyValue("--collapsed-width").trim();
    slider.style.gridTemplateColumns = Array.from(slides, function (slide) {
        return slide === selectedSlide ? "minmax(0, 1fr)" : collapsedWidth;
    }).join(" ");
}

slides.forEach(function (slide) {
    slide.addEventListener("click", function () {
        activateSlide(slide);
    });

    slide.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activateSlide(slide);
        }
    });
});