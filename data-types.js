//data types in javascript 
// primitive datatypes ,number,string,boolean
// special data types = null, undefined
// non-primitive datatypes = array ,object


console.log("===========primitive datatypes ==========")
var age=22;
console.log("type of age varable :",typeof age);
console.log("type of age :",typeof(age));


 var name="Ashwini";
console.log("type of name variable :",typeof(name));

var isValidAge =true;
console.log("type of isValidAge :",isValidAge);


console.log("============= Special type of datatypes");
var lname;
console.log("without any value of datatpe of last name :",lname); //undefined
console.log("type of empty variable :",lname)//undefined
lname = "Yedave";
console.log("last name: ",lname)

var age = null;
console.log("value of age is null variable :",age);
console.log("data type of age is which initialization is null:",typeof age);

console.log("============= non-primitive type of datatypes");

var array=[];
console.log("type of empty array:",array) //(0)[]

 array=[12,34,56,'ashu',true,12.34,'A'];  

 //checking also dataype of partiicular array values

console.log("type of Array :",typeof array);  //object
console.log("type of 5 index :",typeof array[5]); //number 
console.log("type of 3 index :",typeof array[3]);  //string

//print the array by using for
for(let i=0; i<=array.length-1;i++)
{
 console.log(array[i]);
}

//print the array by using the forEach method return type is void
array.forEach((element,index) => {
    console.log(element, index);
});

//print the array elements by using join method which is used for seprate the
// elem by using , . - any special character return type is string
console.log(array.join(', '))
// console.log(array.join("* ")) //working this also


 console.log(array.push("Mahesh",108)); //return the number of element in array
// console.log(array.join(", "));
console.log(array.pop()); //return the deleted element return type is number

console.log("shift method :",array.shift());  //remove the element from stari