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








//node.js
/*

*/