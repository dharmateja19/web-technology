let arr=[1,2,4,5]
let s=0
for (let i = 0; i < arr.length; i++) {
    s+= arr[i];  
}
console.log(s);

const str="Dharma"
let rstr= str.split("").reverse().join("");
console.log(rstr);

const n=100
let count=0
const array=[]
const isprime = (i)=>{
    if(i==2 || i==3) return true;
    for(let j=2;j<=i/2;j++){
        if(i%j==0) return false
    }
    return true
}
for (let i = 2;; i++) {
    if(isprime(i)){
        array.push(i)
        count++;
        if(count==n){
            break;
        }
    }
}
console.log(array);
