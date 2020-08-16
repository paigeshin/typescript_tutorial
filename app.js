"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); // it can be null
//Learning - array
const numResults = [];
const textResults = [];
function add(num1, num2) {
    //Learning - Type Guard
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    }
    else {
        return +num1 + +num2;
    }
}
//Learning - Using Objects & Array Types
//Learning - define objects as paramters
function printResult(resultObj) {
    console.log(resultObj.val);
}
if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = add(+num1, +num2);
        numResults.push(result);
        const stringResult = add(num1, num2);
        textResults.push(stringResult);
        console.log(result);
        console.log(stringResult);
        printResult({ val: result, timestamp: new Date() });
        console.log(numResults, textResults);
    });
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
