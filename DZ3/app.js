//1
let inns =["01212201212345", "11212201212345", "21212201212345",
     "11212201212345", "11212201212345", "01212201212345", "21212201212345"]


let women = 0;
let men = 0;
let companies = 0;

for (let i = 0; i < inns.length; i++) {
    if (inns[i][0] === "0") {
        companies++;
    } else if (inns[i][0] === "1") {
        women++;
    } else if (inns[i][0] === "2") {
        men++;
    }
}

console.log("Женщин:", women);
console.log("Мужчин:", men);
console.log("Компаний:", companies);

//2
let cardsNo = ["46782346","45781218","79874568","12157845","36151845","41250895","41201961", "41201961",
    "41201961","41201961","41201961","41201961","41201961","41201961","41201961","41201961"];

let visa = 0;

for (let i = 0; i < cardsNo.length; i++) {
    if (cardsNo[i][0] === "4") {
        visa++;
    }
}

console.log(`Карт VISA ${visa} из ${cardsNo.length}`);

//3 
let numbers = [0, 3, 0, 12, 5, 0, 1];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
        result.push(numbers[i]);
    }
}
console.log(result);

//4

let points = [10, 6, 6, 8, 9, 4, 7, 8];
let newPoints = [];

for (let i = 0; i < points.length; i++) {
    newPoints.push(Math.round(points[i] / 2));
}

console.log(newPoints);