// 5. Create a function that accepts 2 integers (a & b) and prints out all whole numbers between them including both endpoints but not including those numbers
// > Input: `3`, `8`
// > Output: `[4, 5, 6, 7]`

function printBetween(inputA: number, inputB: number){
    let ArrayOutput: Array<number> = [];
    if(inputA < inputB){
        for(let i=inputA+1; i<inputB; i++){
            ArrayOutput.push(i)
        }
    }else{
        for(let i=inputB+1; i<inputA; i++){
            ArrayOutput.push(i)
        }
    }
    return ArrayOutput;
}

console.log(printBetween(3,8));
console.log(printBetween(8,3));