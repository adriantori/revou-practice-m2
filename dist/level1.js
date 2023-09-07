"use strict";
// 1. Write a function that takes in an array of numbers and returns the sum.
// > Input: `[1,2,3,4,5]`
// > Output: `15`
function sumOfArray(inputArray) {
    let outSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        outSum += inputArray[i];
    }
    return outSum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));
