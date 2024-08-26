let array = new Array(); //new  is ued for create new any things
let mySet =new Set(); // set is SetConstructor
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);

console.log(mySet);

 //calculate the size of set object/variable
console.log("size of of set element :",mySet.size);

 //cehck the element and return the boolean value 
console.log("delete the element inside the set :",mySet.delete(10));  //true

 // Return then rest of set element 
console.log("after deleting the set element :",mySet); //[20, 30, 40 ,50]

//  check the type of set variable
console.log("type of the set variable :",typeof mySet); //Object 
console.log()

//traverse means itearat