// this == window;

// "use strict";
console.log(this);

function func(a) {
  console.log(a);
}
this.func(3);

// console.log(window);
// window - global object
// this = object which is calling it

// window
// function personInfo() {
//     console.log(`My name is ${this.firstName} and age is ${this.age}`);}

// const person1 = {
//     firstName : "ashi",
//     age: 1,
//     about: personInfo
// }

// const person2 = {
//     firstName : "ishu",
//     age: 2,
//     about: personInfo
// }

// const person3 = {
//     firstName : "ayushi",
//     age: 3,
//     about: personInfo}

// person1.about() // My name is ashi and age is 1

// person3.about() // My name is ayushi and age is 3

// person1.about();
// person2.about();
// person3.about();
