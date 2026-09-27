// 1

function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeString("ЕВГЕНИЙ")); 
console.log(capitalizeString("иВАНОВ")); 
console.log(capitalizeString("КЕРемет")); 


// 2

let charCount = function(str, char) {
    let count = 0;

    str = str.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log("Количество символов:", charCount("Abrakadabra", "a"));
console.log("Количество символов:", charCount("hello", "z"));
console.log("Количество символов:", charCount("ААА", "А"));

// 3

let hidePhone = function(phone) {
    let firstPart = phone.slice(0, -2);
    let hiddenPart = "xx";
    return firstPart + hiddenPart;
}
console.log("После скрытия =>", hidePhone("+996 555 123 123"));



// 4

function evenOddSum(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    return [evenSum, oddSum];
}

console.log(evenOddSum([50, 60, 60, 45, 71]));
