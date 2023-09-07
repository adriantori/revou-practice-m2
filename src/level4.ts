// 4. Create a function that accepts three parameters (a number, b number , c number) and prints out all combinations of those.
// > Input: `1`, `2`, `3`
// > Ouput: `[123, 132, 213, 231, 312, 321]`

function allPossibility(inputA: number, inputB: number, inputC: number){
    const inputArray: Array<number> = [inputA, inputB, inputC];
    let output: string = '';
    for (let a = 0; a<3; a++){
        for (let b = 0; b<3; b++){
            for (let c = 0; c<3; c++){
                output += inputArray[a]
                output += inputArray[b]
                output += inputArray[c]
                output+=" "
            }    
        }
        
    };
    return output
}

function possibility(inputA: number, inputB: number, inputC: number){
    const inputArray: Array<number> = [inputA, inputB, inputC];
    let output: string = '';
    for (let a = 0; a<3; a++){
        for (let b = 0; b<3; b++){
            for (let c = 0; c<3; c++){
                if(a !== b && b !== c && c !== a){
                    output += inputArray[a]
                    output += inputArray[b]
                    output += inputArray[c]
                    output+=' ';
                }
            }    
        }
        
    };
    return output
}

console.log(allPossibility(1,2,3))
console.log(possibility(1,2,3))