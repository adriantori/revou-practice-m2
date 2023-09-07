"use strict";
// 7. Create a function that checks whether all elements within an array are unique values
// > Input: `[1,2,2,4,5]`
// > Output: `false`
// cheating using chatGPT to fix mislogic
//old code:
// function uniqueValues(input: Array<number>){
//     let arrayComparator: Array<number> = [input[0]];
//     let arrayOutput: Array<number> = []
//     for(let i = 1; i< input.length; i++){
//         for(let j = 0; j < arrayComparator.length; j++){
//             if(arrayComparator[j] === input[i]){
//                 return false
//             }else{
//                 arrayComparator.push(input[i])
//             }
//         }
//     }
//     return true;
// }
function uniqueValues(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            if (input[i] === input[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(uniqueValues([1, 2, 3, 4]));
console.log(uniqueValues([1, 2, 3, 2, 4]));
