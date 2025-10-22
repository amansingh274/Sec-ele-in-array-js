let arr=[10,30,56,43,29,64]
let max = Math.max(arr[0],arr[1]);
let smax=Math.min(arr[0],arr[1]);

for(let i=2;i<arr.length;i++){
   if(arr[i]>max){
    smax=max
    max=arr[i]
   }else if(arr[i]>smax && max!=arr[i]){
    smax=arr[i]
   }
}

console.log(smax)
