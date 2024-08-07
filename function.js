//valid way to call the function
//a lock of code perform particular task
function test(){
    var str="Good Morning...";
    return str;
}
var result = test();
console.log(result);

function tabletwo(mo){
    
    for(let i=1;i<=10;i++)
    {
        console.log(i*mo);
    }
   return result;
}
var two= tabletwo(2);
console.log(two);

var result1= tabletwo(2);
console.log(result1);

function square(sq){ 
    return sq*sq;
}
var result1 = square(5);
console.log(result1);

