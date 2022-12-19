# Hoisting 
* Hoisting is a `JavaScript mechanism` where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or  local.
* In case of var :
Variables - undefined , function - function definition
* In case of let, const & class :
variables declared with let, const, and class are hoisted but remain `uninitialized`
```js
var x = undefined;
const y ;
var func1 =  func1 = (z) => z ;
let func2 ;
console.log(x); /// undefined
console.log(y); /// Uncaught ReferenceError: y is not defined // y is hoisted but uninitialized
console.log(func2(5));//Uncaught ReferenceError: Cannot access 'func2' before initialization
console.log(func1(5)); /// ƒ func1() {console.log("")}
var x = 3.14;
const y= "hi";
var func1 = (z) => z
let func2 = function (z) { return z };
console.log(x); /// 3.14
console.log(func1(5)); /// 5
```
---
# Detailed example of Hoisting
```js
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
```
---
# Lexical Scoping
Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bounded to the execution context of their parents.
`Lexical environment` = Local memory + lexical environment of its parent
```js
const myVar = "value1";
function myApp() {
    function myFunc() {
        const myVar = "value59";
        const myFunc2 = () => {
          console.log("inside myFunc2", myVar); // myFunc2 -> myFunc -> myApp -> global scope -> value1
      }
      console.log(myVar); //  myFunc -> myApp -> global scope -> value1 /// value1
      myFunc2();
  }
  myFunc();
  }
myApp();
// Without comment
// value1
// inside myFunc2 value1

// With comment
// value59
// inside mufunc2 value59
```
---
# Scoping

* var is Function scoped
```js
{
    var name = "ayushi";
}
console.log(name); /// ayushi
```
* let and const are Block scoped
```js
{
    const/let name = "ayushi";
}
console.log(name); /// Reference error : name is not defined
```
---
# Default parameters
```js
// Now
function addTwo(a1, a2, b =0){
    return a1+a2+b;
} // b will be 0 if not given, "if given - take that value"
addTwo(4,9,7) ///20
const ans = addTwo(4, 8);
console.log(ans); /// 12
```
---
# Callback function : Function calling another function
* Function as argument
```js
// function myFunc2(name){
//     console.log(name);
// }
let myFunc2 = (name) => {
    console.log(name);
}
function myFunc(callback ){
    callback("ayushi");
}
myFunc(myFunc2); // myfunc -> myfunc2 -> ayushi

// ayushi
```
# Higher order function : Function returning Function 
* Function returning Function 
```js
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = myFunc();
console.log(ans());
```
---
# Sets
* Sets - iterable
* store data  
* sets also have its own methods
* `No index-based access` - gives undefined if try to access
* `Order is not guaranteed`
* Unique items only (`No duplicates allowed`)
* `Doesn't have length property` : set.length - undefined
---
```js
// Creating set with iterable
// 1
const num = new Set([1,2,3,3])
console.log(num) ///{1,2,3} /// No duplicacy
// 2
const num = new Set("abcaaacc")
console.log(num) ///{'b', 'a', 'c'}

// Creating empty set and then adding
const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(['item1'])
numbers.add(items);
numbers.add(['item1', 'item2', 'item3']) 
// ye bhi add ho jaayega though its same as items kyuki alag array hai address wise
console.log(numbers) 
/// {1,2,3,['item1'],['item1', 'item2', 'item3'], ['item1', 'item2', 'item3']}
```
---
* has(ele) - Checking element is present or not - returns True/False
```js
if(numbers.has(1)){
    console.log("1 is present")}
else{console.log("1 is not present")}
```
* for of loop in set
```js
for(let number of numbers){
    console.log(number); /// 1 2 3 [] [] []
}
```
---

# Optional Chaining
* To access property which is currently unavailable, but will be available later
* Avoids error -> Gives undefined
* x?.y?.z -> If x exists -> Give y -> If y  exists -> Give z


<!-- form - input1 - enter name*
       input2 - enter address -->
```js
const user  = {
    firstName: "ayushi",
    // address: {houseNumber: '1234'}
}
console.log(user.firstName); /// ayushi
console.log(user.address.houseNumber); 

console.log(user?.firstName); /// ayushi
console.log(user.address.houseNumber); /// Error // Can't access houseNumber from undefined 
// -> user.address = undefined -> user.address.houseNumber = undefined. houseNumber => Error
console.log(user?.address?.houseNumber); /// Undefined
```
---
