/*
1. emit("event param")- triggers, creates and calls the event, event to be triggered is passed in it
2. on("event emit param", callback)- registers the event and it is called as listener
3. class is always used in pascal form and variables in camel case
4. require keyword is used to call the class

*/
// EventEmitter module
/*
const { log } = require('console');
const EventEmitter= require('events');// this is module
const event= new EventEmitter(); // this is variable

// event.on('great', () => {
//     console.log("this is event emitter");
    
// });

event.once('great', () =>{
    console.log("I want to print the event once");
    
})


event.emit('great');
event.emit('great');
event.emit('great');
event.emit('great');
*/

/*
const EventEmitter= require('events');
const event1= new EventEmitter();

event1.on('greet', ()=>{
    console.log("Greetings everyone!");
});

event1.emit('greet');

const event2= new EventEmitter();

event2.on('exit', () =>{
    console.log("exiting from the function");
})

event2.emit('exit');

// custom EventEmitter

const EventEmitter= require("events");
class MyEmitter extends EventEmitter();
const e = new MyEmitter();

e.on("greet", (msg)=>{
    console.log(`hello! ${msg}`);
    
})

event.on("exit", ()=>{
    console.log("Bye! going out");
    
})
e.emit("greet", "CSE21 this is fsd class");
e.emit("exit");
*/

// program 2- simulate DOM-like event handling in node.js using button

const EventEmitter= require('events');
class Button extends EventEmitter{
    click(){
        console.log("button clicked");
        this.emit("click", "click");
    }
    mouseover(){
        console.log("mouseover function is triggeres");
        this.emit("mouseover", "mouseover");
    }
};

let b= new Button();
b.on("click", (msg)=>{
    console.log(`${msg} function is listened`);
})

b.click();

b.on("mouseover", (msg)=>{
    console.log(`${msg} func is listened`);
})

b.mouseover();







