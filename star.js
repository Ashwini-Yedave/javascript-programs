let pattern ='';
for(let i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        pattern +='*';
    }
    pattern +='\n';
}
console.log(pattern);