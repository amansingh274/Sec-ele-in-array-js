let arr=[60,50,40,30,20]
let newarr=new Array(arr.length);
let j=0;
for(let i=arr.length-1;i>=0;i--){
newarr[j]=arr[i]
j++
}
console.log(newarr)
