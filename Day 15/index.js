// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// // h1 - 1sec h2-5sec
// // nested callback
// // set1 set5 set2 set1 set2
// // set1 set1 set2 set2 set5
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
//           setTimeout(() => {
//             heading5.textContent = "five";
//             heading5.style.color = "green";
//             setTimeout(() => {
//               heading10.textContent = "five";
//               heading.style.color = "green";
//               setTimeout(() => {
//                 heading5.textContent = "five";
//                 heading5.style.color = "green";
//                 setTimeout(() => {
//                   heading5.textContent = "five";
//                   heading5.style.color = "green";
//                 }, 2000);
//               }, 2000);
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 5000);
// }, 1000);

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

// CALLBACK HELL
// PYRAMID OF DOOM

// changeText(
//   heading1,
//   "one",
//   "violet",
//   1000,
//   () => {
//     changeText(
//       heading2,
//       "two",
//       "purple",
//       2000,
//       () => {
//         changeText(
//           heading3,
//           "three",
//           "red",
//           1000,
//           () => {
//             changeText(
//               heading4,
//               "four",
//               "pink",
//               1000,
//               () => {
//                 changeText(
//                   heading5,
//                   "five",
//                   "green",
//                   2000,
//                   () => {
//                     changeText(
//                       heading6,
//                       "six",
//                       "blue",
//                       1000,
//                       () => {
//                         changeText(
//                           heading7,
//                           "seven",
//                           "brown",
//                           1000,
//                           () => {
//                             changeText(
//                               heading8,
//                               "eight",
//                               "cyan",
//                               1000,
//                               () => {
//                                 changeText(
//                                   heading9,
//                                   "nine",
//                                   "#cda562",
//                                   1000,
//                                   () => {
//                                     changeText(
//                                       heading10,
//                                       "ten",
//                                       "dca652",
//                                       1000,
//                                       () => {},
//                                       () => {
//                                         console.log("Heading10 does not exist");
//                                       }
//                                     );
//                                   },
//                                   () => {
//                                     console.log("Heading9 does not exist");
//                                   }
//                                 );
//                               },
//                               () => {
//                                 console.log("Heading8 does not exist");
//                               }
//                             );
//                           },
//                           () => {
//                             console.log("Heading7 does not exist");
//                           }
//                         );
//                       },
//                       () => {
//                         console.log("Heading6 does not exist");
//                       }
//                     );
//                   },
//                   () => {
//                     console.log("Heading5 does not exist");
//                   }
//                 );
//               },
//               () => {
//                 console.log("Heading4 does not exist");
//               }
//             );
//           },
//           () => {
//             console.log("Heading3 does not exist");
//           }
//         );
//       },
//       () => {
//         console.log("Heading2 does not exist");
//       }
//     );
//   },
//   () => {
//     console.log("Heading1 does not exist");
//   }
// );

// created promise

// const friedRicePromise = new Promise((resolve, reject) => {
//     if ()
//         _________
//         _____
//         resolve(output)
//     else {
//         reject(error_msg)
//     }
// })

// 1. resolve - then (then's callback paramter)
// 2. reject - catch (catch's callback paramter)

// Consuming Promise
// friedRicePromise.then((output) => {
//     console.log(output)
// })
// .catch((error_msg) => {
//     console.log(error_msg)

// })
