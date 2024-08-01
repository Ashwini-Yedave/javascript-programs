const list=["c",'e','d','m','a'];
console.log(list.sort());

const numer=[89, 45 ,23, 12 ,1, 2, 4];
numer.sort((a, b) =>a-b);
console.log(numer);

const m =[104,100,89, 45 ,23, 12 ,1, 2, 4];
m.sort((a,v) => a-v);
console.log("m array of sortig ascedig",m)

m.sort((a,v) => a+v);
console.log("array sortig decedig order :",m)


for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        console.log("*");
    }
    console.log();
}

