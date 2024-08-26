//1] Arrow function :-
//  arrow function also cxalled fat arrow functions,are a concise syntax for defining functions in javascript
// reducce the code ,redablity of code

// simple function
// function add(x,y){
//     return x+y;
// }
// const result=add(4,3);
// console.log("addition of two no =",result);

const add=(x,y)=> x + y;
console.log("Addition uSing the 'Arrow fun' =",add(5,8));



//================================

// 2] Callback function :- callback function is function that is passed as an argument to another function

//simple fun accept the two parameter a: name aNd callback  function
function greetUser(name, callback){
    console.log("hello" + name);
    callback();
}

//callback function
function showGreeting(){
    console.log("welecome to our website!..");
}
greetUser('Ashwini',showGreeting);


//firts call the greetUser function then print the hello Ashwini and after that
// call the showGreeting function and print the msg


//================================

//what is asnychronus opration in javascript
//async pratin is  no excute the block of code
//setTimeout is the  async function which executes callback fun after a specific period of time
//use async oprations (beacused those oprations takes time) in setTimeOut, promises ,loading data an API, Uploading files, Animations and Transaction


console.log("before the setTimeOut")
setTimeout(() => {
    console.log("inside the settime out")
}, 3000);
console.log("after the setTimeOut");


//================================

//promises:- 
//promises in javascript are a way to handle the async oprations.
//a promises represent a value that may not be available yet but will be avalaible at some pint in the future.
//promises can be in on three states: pending ,resolved, or rejected.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random()* 10);

        if(randomNum<5){
            resolve(`Success! Random number: ${randomNum}`)
            
        }else{
            reject(`Error! Random number: ${randomNum}`);
        }
    }, 3000);
}) //this is the promise constructor for create new promise

myPromise.then((result) => {
    console.log(result);
})

.catch((error) => {
    console.log(error);
})

// 3] anonymous function- which function is not have name is javascript
// declare with variable or refrance

const sum = function(num){
  return num+num;
}
console.log("sum of two no :",sum(8));

// 4] this is a IIFE(immeditatly invoked function expression)
//we can declare and immeditae call ater the declare

const square = function(num){
 console.log("square of two numbers : ",num*num);
};square(8)  //like this thgis assign two one variable(anonyoums function)

//what is lexcial scope - lexical scope is access variable inside the block from parent scope

var lexical="hello lexical";
function lexicalFun(){
    console.log(lexical);
}