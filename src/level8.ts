// 8. Create a function that removes duplicates from an array
// > Input: `[1,2,2,3,4,5]`
// > Output: `[1,2,3,4,5]`

function dupeRemoval(input: Array<number>){
    let output: Array<number> = [];
    let isPushed: boolean = false
    output.push(input[0]);
    for (let i = 1; i < input.length; i++) {
        isPushed = true;
        for(let j = 0; j< output.length; j++){
            if(output[j] === input[i]){
                isPushed = false;
            }
        }
        if(isPushed){
            output.push(input[i]);
        }
    }
    return output;
}

console.log(dupeRemoval([1,2,2,3,4,5]));
console.log(dupeRemoval([1,2,4,3,4,1,2,7]));