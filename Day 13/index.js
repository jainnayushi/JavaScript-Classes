// const sectionTodo = document.querySelector(".section-todo");

// // Get complete info
// const info = sectionTodo.getBoundingClientRect();
// console.log(info); /// {bottom,height,left,right,top,width,X,V}

// // Get specific info
// const heightInfo = sectionTodo.getBoundingClientRect().height; /// 433.547684648

// const btn = document.querySelector(".btn-headline");
// // console.dir(btn) /// {onclick: null, onblur:, onchange:.......}
// btn.onclick = function(){
//     console.log("Clicked");
// }
// console.dir(btn) /// {onclick: f() {..}, onblur:, onchange:.......}

// const btn = document.querySelector(".btn-headline");
// // 1 - Function
// function clickMe(){
//     console.log("Clicked");
// }
// btn.addEventListener("click", clickMe);
// // 2 - normal function in addEventListener
// btn.addEventListener("click", function(){
//     console.log("Clicked");});

// // 3 -arrow function in addEventListener
// btn.addEventListener("click", ()=>{
//     console.log("Clicked")});

const allButtons = document.querySelectorAll(".my-buttons button");
// // Normal loop
// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     console.log(allButtons[i]);
//     console.log(this);
//   });
// } /// <button> My Button 1 </button> // this of whichever btn we click

// // For of loop
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this); /// <button> My Button 1 </button> // this of whichever btn we click
//     console.log(button);
//   });
// } /// My Button 1

// // forEach()
// allButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(this);
//     console.log(button);
//   });
// }); /// <button> My Button 1 </button> // this of whichever btn we click

// const firstButton = document.querySelector("#bt");
// firstButton.addEventListener("click", function (event) {
//   console.log(event); /// MouseEvent {......} // event is returned Object
//   console.log(event.currentTarget); // jispar click karenge vo aayega
// });

// Bubbling

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
  console.log("You clicked on child");
});
parent.addEventListener("click", () => {
  console.log("You clicked on parent");
});
grandparent.addEventListener("click", () => {
  console.log("You clicked on grandparent");
});
document.body.addEventListener("click", () => {
  console.log("You clicked on document.body");
});

// Capturing

child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);
grandparent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! grandparent");
  },
  true
);
document.body.addEventListener(
  "click",
  () => {
    console.log("capture !!!! document.body");
  },
  true
);

// Delegation

// grandparent.addEventListener("click", (e) => {
//   console.log("Clicked");
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
