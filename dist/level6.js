"use strict";
// 6. Create a function that accepts 0-n parameters and adds them together (or multiplies)
// > Input: `5`
// > Output: `15`
function sumAll(input) {
    let output = 0;
    for (let i = 1; i <= input; i++) {
        output += i;
    }
    return output;
}
console.log(sumAll(1));
console.log(sumAll(5));
console.log(sumAll(100));
