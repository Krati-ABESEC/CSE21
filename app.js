/*
const name= () =>{
    console.log("Learning advanced JS for Backend");
    console.log("node.js is runtime environment for JS");
}

name();

const sum= (num1, num2)=>{
    return (num1+num2);
}

console.log(sum(10,12));


function print(){
    console.log(arguments);// it will run
}

print("Hello");

const p= ()=>{
    console.log(arguments);// it won't run in arrow functions
}

p("World!");
*/
// DOM won't run in the terminal using node.js
// synchronous

/*
async function synous(){
    await setTimeout(()=>{// syntax of setTimeout is setTimeOut(arrow function, time in millisecs)
        console.log("its a synchronous programming");
    }, 2000);
}

synous();

function hello(){
    console.log("hello");
}

hello();

// callback- its the function which is passed as an parameter in the another function

function night(print){
    console.log(print(2,80));
}

night(print);

function print(a,b){
    return a*b;
}

function display(text){
    console.log("Welcome to ABES");
    text();
}

function text(){
    console.log("learning FSD in JS");
}

display(text);

// functions of array- filter, map, reduce , forEach

let fruits= ["mango", "apple", "litchi", "Strawberry"];

fruits.forEach(fruit => {
    console.log(fruit);
});

fruits.map((fruit)=>{
    console.log(fruit);
});

// promises

let promise= new Promise((resolve, reject)=>{
    console.log("promise is pending");
    resolve("operational success");//resolve and reject are the functions used as parameters in the promise
})

let choice= true;

if(choice){
    promise.then(res =>{
        console.log("success");
    })
}else{
    promise.catch(err =>{
        console.log("something went wrong");
    })
}

//
function display(username, password, err){
    return new Promise((resolve, reject)=>{
        if(!err){
            resolve(`username: ${username} and password: ${password}`);
        }else{
           reject("unable to fetch the info"); 
        }
    })
}

let np= display("Krati", "7812", false);

np.then(res=> console.log(res)).catch(err => console.log(err));
*/

// async await is used to resolve the promise chaining problem

async function test(){
    console.log("1");
    console.log("3");
    await console.log("2");
    console.log("4");
}

test();
console.log(6);







//node.js
/*

*/