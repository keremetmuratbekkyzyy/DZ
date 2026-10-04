let coins = 0;
let energy = 200;


let catButton = document.querySelector("#catButton");
let coinsElement = document.querySelector("#coins");
let energyElement = document.querySelector("#energy");


catButton.addEventListener("click", function() {
    if (energy > 0) {
        coins = coins + 10;
        energy = energy - 1;

        coinsElement.textContent = coins;
        energyElement.textContent = energy;
    }
});