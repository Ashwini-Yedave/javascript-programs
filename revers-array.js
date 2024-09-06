//for using simple for loop 
var arr=[1,2,3,4,5];
var reverseArr=[];
for(i=arr.length-1;i>=0;i--){

reverseArr.push(arr[i]);
}
console.log(reverseArr);

//using the reverse method of array 
var reverse2=arr.reverse();
console.log("using reverse method",reverse2);

//use the sort method of array
bySort=arr.sort((a,b) => a+b);
console.log("reverse the element the using sort method :",bySort)