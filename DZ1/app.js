let namee = prompt("Введите ваше имя:");
let surname = prompt("Введите вашу фамилию:");

console.log("Здравствуйте, " + namee + " " + surname);

//Ресторан 

let restaurant = "Claude Monet";
let ownerName = "Иван Иванов";

let menu = ["Салат Цезарь", "Паста Карбонара", "Стейк Рибай", "Десерт Тирамису"];
let averageBill = 5000;
let numberOfStaff = 15;
let numberOfMishlenStars = 3;

console.log("Добро пожаловать в ресторан " + restaurant + "!");
console.log("Владелец ресторана: " + ownerName);
console.log("Меню ресторана: " + menu.join(", "));  
console.log("Средний чек: " + averageBill + " рублей");
console.log("Количество сотрудников: " + numberOfStaff);
console.log("Количество мишленовских звезд: " + numberOfMishlenStars);

let hasFrenchCuisine = true;
let hasChineseCuisine = false;
let hasJapaneseCuisine = true;

if (hasFrenchCuisine) {
    console.log("В ресторане есть французская кухня");
} else {
    console.log("В ресторане нет французской кухни");
}

if (hasChineseCuisine) {
    console.log("В ресторане есть китайская кухня");
} else {
    console.log("В ресторане нет китайской кухни");
}

if (hasJapaneseCuisine) {
    console.log("В ресторане есть японская кухня");
} else {
    console.log("В ресторане нет японской кухни");
}

