// sort the string array
const list=["c",'e','d','m','a'];
console.log(list.sort());

//sort the number array
const numer=[89, 45 ,23, 12 ,1, 2, 4];
numer.sort((a, b) =>a-b);
console.log(numer);

const m =[104,100,89, 45 ,23, 12 ,1, 2, 4];
m.sort((a,v) => a-v);
console.log("m array of sortig ascedig",m)

//sorthing the array in decending order
m.sort((a,v) => a+v);
console.log("array sortig decedig order :",m)


for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        console.log("*");
    }
    console.log("");
}


// write a function that takes an array of objects and a key ,and returns
// ..a new array  sorted based on the values of that key in ascending oder

function sortByKey(arr, key){
    return arr.slice().sort((a,b ) => {
        if(a[key] < b[key]){
            return -1;
        }
        if(a[key] > b[key]){
            return 1;
        }
        return 0;
    });
}

const people=[
    {name: 'Ashwini', age:23},
    {name: 'Mahesh', age:23},
    {name: 'Aai', age:41}
];

const sortByKey= sortByKey(people, 'age');
console.log(sortByKey);

