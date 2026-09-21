let number = Number(prompt("Введите номер планеты от 1 до 9:"));

if (number === 1) {
    console.log("Меркурий");
} else if (number === 2) {
    console.log("Венера");
} else if (number === 3) {
    console.log("Земля");
} else if (number === 4) {
    console.log("Марс");
} else if (number === 5) {
    console.log("Юпитер");
} else if (number === 6) {
    console.log("Сатурн");
} else if (number === 7) {
    console.log("Уран");
} else if (number === 8) {
    console.log("Нептун");
} else if (number === 9) {
    console.log("Плутон");
} else {
    console.log("Такой планеты нет");
}


let temperature = Number(prompt("Введите температуру:"));

if (temperature < -10) {
    console.log("Морозно");
} else if (temperature <= 0) {
    console.log("Очень холодно");
} else if (temperature <= 10) {
    console.log("Холодно");
} else if (temperature <= 20) {
    console.log("Прохладно");
} else if (temperature <= 25) {
    console.log("Облачно");
} else if (temperature <= 32) {
    console.log("Тепло");
} else {
    console.log("Жарко");
}


let code = prompt("Введите код региона:");

if (code === "01") {
    console.log("г. Бишкек");
} else if (code === "02") {
    console.log("г. Ош");
} else if (code === "03") {
    console.log("Баткенская область");
} else if (code === "04") {
    console.log("Джалал-Абадская область");
} else if (code === "05") {
    console.log("Нарынская область");
} else if (code === "06") {
    console.log("Ошская область");
} else if (code === "07") {
    console.log("Таласская область");
} else if (code === "08") {
    console.log("Чуйская область");
} else if (code === "09") {
    console.log("Иссык-Кульская область");
} else {
    console.log("Такого кода региона нет");
}


let amount = Number(prompt("Введите сумму в сомах:"));
let currency = prompt("Введите валюту: USD, EUR, RUB или CNY");

if (currency === "USD") {
    let result = Math.round(amount / 87);
    console.log("Курс: 87, сумма:", result, "USD");
} else if (currency === "EUR") {
    let result = Math.round(amount / 100);
    console.log("Курс: 100, сумма:", result, "EUR");
} else if (currency === "RUB") {
    let result = Math.round(amount / 1);
    console.log("Курс: 1, сумма:", result, "RUB");
} else if (currency === "CNY") {
    let result = Math.round(amount / 13);
    console.log("Курс: 13, сумма:", result, "CNY");
} else {
    console.log("Такой валюты нет");
}