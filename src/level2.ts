// 2. Given two strings as arguments to your function return true if they are the same or false otherwise.
// > Input: `kuda`, `KuDa`
// > Output: `true`

function isSame(inputA: string, inputB: string){
    const lowerInputA = inputA.toLowerCase()
    const lowerInputB = inputB.toLowerCase()
    if(lowerInputA == lowerInputB){
        return true;
    }else{
        return false;
    }
}

console.log(isSame('tes','tis'));
console.log(isSame('tebs','teBs'));
console.log(isSame('123','123'));