"use strict";
// 3. Create a function that will reverse any string passed into it
// > Input:`“hello”`
// > Output: `“olleh”`
function reverseString(input) {
    const inputArray = input.split("");
    let output = "";
    for (let i = inputArray.length - 1; i >= 0; i--) {
        output += inputArray[i];
    }
    return output;
}
console.log(reverseString('hello'));
console.log(reverseString(''));
