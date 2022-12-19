console.log(x); /// undefined
// Var was hoisted and initialized with undefined

console.log(y); /// Uncaught ReferenceError: Cannot access 'y' before initialization
console.log(z); /// Uncaught ReferenceError: Cannot access 'z' before initialization
// Let and Const Variable were hoisted but not initialized

console.log(func_normal); /// ƒ func_normal(p) {return p * 2;}
// Normal function was hoisted and initialized with function definition

console.log(func_normal(5)); /// 10
// Normal function can be called as it hoisted

console.log(func_exp_let(5)); /// Uncaught ReferenceError: Cannot access 'func_exp' before initialization
console.log(func_exp_var(5)); /// Uncaught TypeError: func_exp_var is not a function
console.log(func_arrow_var(5)); /// Uncaught TypeError: func_arrow_var is not a function
console.log(func_arrow_let(5)); /// Uncaught ReferenceError: Cannot access 'func_arrow' before initialization
// Here function expression and arrow function treated as variables

var x = 3.14;
let y = "ayushi";
const z = "hi";
function func_normal(p) {
  return p * 2;
}
var func_exp_var = function (z) {
  return z * 4;
};
let func_exp_let = function (z) {
  return z * 4;
};
var func_arrow_var = (z) => z * 3;
let func_arrow_let = (z) => z * 3;
console.log(x); /// 3.14
console.log(y); /// ayushi
console.log(z); /// hi
console.log(func_normal(5)); /// 10
console.log(func_arrow_var(5)); /// 10
console.log(func_arrow_let(5)); /// 10
console.log(func_exp_let(5)); /// 20
console.log(func_exp_var(5)); /// 20
