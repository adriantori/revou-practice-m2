// 3. Create a function that will reverse any string passed into it
// > Input:`“hello”`
// > Output: `“olleh”`

function reverseString(input: string){
    const inputArray: Array<string> = input.split("");
    let output: string = "";
    for(let i=inputArray.length-1; i>=0; i--){
        output += inputArray[i];
    }
    return output;
}

console.log(reverseString('hello'));
console.log(reverseString(''));