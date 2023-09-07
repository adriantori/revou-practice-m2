// 2. Given two strings as arguments to your function return true if they are the same or false otherwise.
// > Input: `kuda`, `KuDa`
// > Output: `true`

function isSame(inputA: string, inputB: string){
    if(inputA === inputB){
        return true;
    }else{
        return false;
    }
}

console.log(isSame('tes','tis'));
console.log(isSame('123','123'));