const arr=[12,13,45,67,8];
const arr2=[6,90,3];
console.log("before spread oprator used :",arr);
const spreadArr=[...arr,...arr2];
console.log("After the used spread oprator :",...spreadArr);
const newArr = [...arr];
console.log("create new array from exsting are by using spread oprator:",newArr);