// string is nothing group of character or group of words.
// in string space also character & count also

var str = "Good morning g";
console.log("my string :",str);

//indexOf() :return the index pf space in string -indexOf
console.log("print the space in string :",str.indexOf(" ")); 

//charAt() :return the character of particular index
console.log("print the character : ",str.charAt(3)); 

//toLowerCase() :convert the string into lowercase
console.log("string convert into lowercase :",str.toLowerCase());

//toUpperCase() :convert the string into Uppercase
console.log("string convert into lowercase :",str.toUpperCase());

//lastIndexOf() :if any character are doule or multiple then return the from last of string charchter
console.log("last index of character: ",str.lastIndexOf("g"));


//trim() :if a ny string inculdes space then remove the trim method 
//..leading means starting spaces  and trilling means ending space
var day="   Saturday  ";
 var dayLength=day.length;
console.log("length of efor triming the string :",dayLength);
var trimday=day.trim(); 
var dayAfterTrimLength = trimday.length;
console.log("after triming of string length :",dayAfterTrimLength);

//how to calculate the reoved the character
console.log("removed character leading and trilling :",dayLength-dayAfterTrimLength);

//slice() whicth is used for get particular part of the string
//start no is inculded and end no is exculsive
var greet="Good Evening Ashwini";
var sliceGreet =greet.slice(3,7);
console.log("Slice of string 3 to 7 :",sliceGreet);
