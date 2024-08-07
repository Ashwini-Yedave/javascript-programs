function add(num,num2){
    return num+num2;
}
var sum=add(2,77);
console.log(sum);

//mAXIMUM number in array using reduce method
let arr=[12,4,67,89,23,1,23,11];
// function maxAaary(){
   
//    let arr2=arr.reduce((max,current)=>(current>max? current:max),arr[0]);
//    console.log("maximum number in array =",arr2)
// }
// maxAaary();

//find max number by using the for loop

var maxNum=arr[0];
for(let i=0;i<=arr.length;i++){
    if(arr[i]> maxNum){
        maxNum=arr[i];

    }
}
console.log("by using for loop find max no=",maxNum);

//using spred opratr
let maxNumber=Math.max(...arr);
console.log("find max no by using spred oprator =",maxNumber);


//find max no by using the for each loop
arr.forEach(element => {
    if(arr>element){
        maxNum=arr;
    }
});
console.log("find max no by using forEach loop:",maxNum);

//=========================================

var str ="hello manu";
function reversString()
{ 
    return str.split("").reverse().join('');
}
var revs =reversString();
console.log("reverse the string =",revs);

//reverse the string 
let reverse='';
for(let i=str.length;i>=0;i--){
     reverse+=str[i]; 
}
console.log("reverse the string :",reverse)