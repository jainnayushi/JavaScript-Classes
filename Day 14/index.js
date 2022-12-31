// // Bubbling
// C parent - child -> B child - parent
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// mixed
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// ); // C
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// ); // C
// grandparent.addEventListener("click", () => {
//   console.log("You clicked on grandparent");
// }); // B

// child.addEventListener("click", () => {
//   console.log("You clicked on child");
// } );
// parent.addEventListener("click", () => {
//   console.log("You clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("You clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("You clicked on document.body");
// });

// // Capturing

// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

// Delegation

// document.body.addEventListener("click", (e) => {
//   console.log("Clicked");
//   // console.log(e);
//   console.log("target", e.target);
//   // console.log("currentTarget", e.currentTarget);
// });

// console.log("script start");
// setTimeout(() => {
//   console.log("inside setTimeout5");
// }, 5000);
// setTimeout(() => {
//   console.log("inside setTimeout3");
// }, 3000);
// for (let i = 1; i < 10; i++) {
//   console.log("inside for loop");
// }
// console.log("script end");

// console.log("script start");
// setInterval(() => {
//   console.log(Math.random());
// }, 2000);
// console.log("script end");

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
// }, 1000);

// setTimeout(() => {
//   heading2.textContent = "two";
//   heading2.style.color = "purple";
// }, 5000);

// setTimeout(() => {
//   heading3.textContent = "three";
//   heading3.style.color = "red";
// }, 2000);

// setTimeout(() => {
//   heading4.textContent = "four";
//   heading4.style.color = "pink";
// }, 1000);

// setTimeout(() => {
//   heading5.textContent = "five";
//   heading5.style.color = "green";
// }, 2000);

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);
