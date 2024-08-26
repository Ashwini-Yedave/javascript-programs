let arr=[1,34,90,23,76];

let fruits =[
    {key:1,name:'mango',price:120, isRip:true},
    {key:2,name:'cheery',price:131, isRip:false},
    {key:3,name:'banana',price:50, isRip:true},
    {key:4,name:'pineapple',price:231, isRip:true},
]

//print the element by using the for loop
console.log("using the for loop");
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}

////print the element by using the for...of loop
console.log("using the for...of loop");
for(let ar of arr){
    console.log(ar);
}

//print the element by using the for...in loop (is used for the object access mostly)
//below code not print the array element only print the index 
//this loop correct work with for...in loop

// console.log("using the for...in loop");
// for(let ar in arr){
//     console.log(ar);
// }

//display the array of object by using for...in
console.log("print the array of object by using for...in")
for (let fruit in fruits) {
    if (fruits[fruit].price >120  && fruits[fruit].isRip==true) {
        console.log(fruits[fruit]);
    }
}


