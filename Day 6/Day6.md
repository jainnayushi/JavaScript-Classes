# Cloning Objects
```js
// 1 : Normal cloning : Both object gets changed
const obj1 ={
    key1: "value1",
    key2: "value2"
}
const obj2 = obj1;
obj1.key3 ="value3";
console.log(obj1); /// {key1: "value1", key2: "value2", key3: "value3"}
console.log(obj2); /// {key1: "value1", key2: "value2", key3: "value3"}

// 2 : Spread operator : Different 
const obj2 = {...obj1};

// 3 : Using Object.assign() : Different
// 1
const obj2 = Object.assign({}, obj1);
// 2
const obj2 = Object.assign({'key69': "value69"}, obj1);
```
---
# Map
* map is an iterable
* stores data in ordered fashion
* store key value pair (like object)
* `duplicate keys are not allowed` like objects
* `Each pair in map is array`

# Difference between maps and objects

* Objects can only have string or symbol as key
* In maps you can use anything like array, number, string as key
---
* Creating map
```js
// 1 - new Map(); => .set=(.. , ...)
const person = new Map();

person.set('firstName', 'Ayushi'); // String as key
person.set('age', 7); // String as key
person.set(1,'one'); // Number as key
person.set([1,2,3],'onetwothree'); // Array as key
person.set({1: 'one'},'onetwothree'); // Object as key

console.log(person); 
/// {'firstName' : 'Ayushi', 'age', 7 .... {1: 'one'}:'onetwothree' }

// 2 - new Map( [[..] , [...]] )
const person = new Map([['name', 'ayushi'], ['age', 22]]) 
// key-values are added in array inside array
console.log(person) /// {'name' =>'ayushi', 'age' => 22}
```
---
* Accessing elements
```js
console.log(person.get(1)); /// 'one'
console.log(person.keys()) // Array of keys
for(let key of person.keys()){
    console.log(key, typeof key); ///firstName string, 1 number, [1,2,3] object
}
```
---
---
# Function
* 1 - Normal Function - Hoisting Yes
```js
function isEven(number){
    return number % 2 === 0;
}
```
* 2 - Function Expression - Hoisting No
```js
const isEven = function(number){
    return number % 2 === 0;
}
```
* 3 - Arrow Function - Hoisting No
```js
const isEven = (number) => {
    return number % 2 === 0;
}
// In case of single return and one parameter - skip {}, (), return
const isEven = number => number % 2 === 0;
```
---
// argument / actual parameter vs  formal parameter

//  Function definition - FP
function func1(no = 190) {
  if (no % 2 == 0) {
      return("yess")
    } else {
      return("no")
    }
}

function func2(arg) {
  return m;
}

// Calling - invoke
// calling - ACP 
// Function Calling - AP
var a = func1(9);
console.log(a); // no
var b = func1(190);

console.log(func1(b)); // yes
var c = func2(b)
---
# Hoisting 
* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or  local.
* In case of var :
Variables - undefined , function - function definition
* In case of let, const & class :
variables declared with let, const, and class are hoisted but remain `uninitialized`
```js
console.log(x); /// undefined
console.log(y); /// Uncaught ReferenceError: y is not defined // y is hoisted but uninitialized
console.log(func1(5));//Uncaught ReferenceError: Cannot access 'func2' before initialization
console.log(func2(5)); /// ƒ func1() {console.log("")}
var x = 3.14;
const y= "hi";
var func1 = (z) => z
let func2 = function (z) { return z };
console.log(x); /// 3.14
console.log(func1(5)); /// 5
```
---
---
# Lexical Scoping
Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bounded to the execution context of their parents.
`Lexical environment` = Local memory + lexical environment of its parent
```js
const myVar = "value1";
function myApp(){
    function myFunc(){ // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar); 
            // gets from parent func -> myapp -> if notfound myapp's parent }
        myFunc2();}
    console.log(myVar); // gets from parent -> global func
    myFunc();}
myApp();
// With comment
value1 inside myFunc value1
// Without Comment
value1 inside myFunc value59
```
---
# Scoping

* var is Function scoped
```js
function app (){
    var name = "ayushi";
}
console.log(name); /// ayushi
```
* let and const are Block scoped
```js
function app (){
    const/let name = "ayushi";
}
console.log(name); /// Reference error : name is not defined
```
---
# Default parameters
```js
// Now
function addTwo(a,b=0){
    return a+b;
} // b will be 0 if not given, "if given - take that value"
addTwo(4) ///4
const ans = addTwo(4, 8);
console.log(ans); /// 12
```
---
# Rest parameter
```js
function myFunc(a,b,...c){
    console.log(`a is ${a}`); /// 3
    console.log(`b is ${b}`); /// 4
    console.log(`c is`, c); /// [5,6,7,8,9] //array
}
// if ... in left its rest parameter "RL"
myFunc(3,4,5,6,7,8,9);
```
* Practical use
```js
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(4,5,4,2,10);
console.log(ans); /// 25
```
---
# param destructuring 
```js
const person = {
    firstName: "ayushi",
    gender: "female"}
// 1 - Directly use obj
function printDetails(obj){
    console.log(obj.firstName); /// ayushi
    console.log(obj.gender); /// female
}
// 2 - Do destructuring
function printDetails({firstName, gender, age}){
    console.log(firstName); /// ayushi
    console.log(gender); /// female
    console.log(age); /// undefined
}
printDetails(person);
```
---
# Callback function : Function calling another function
* Function as argument
```js
function myFunc2(name){
    console.log(name);
}
function myFunc(callback){
    callback("ayushi");
}
myFunc(myFunc2); // myfunc -> myfunc2 -> ayushi
```
# Higher order function
* Function returning Function 
```js
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = myFunc();
console.log(ans()); // ans() -> myfunc()() -> hello()
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
console.log(num[2]) /// undefined // can't access
// 2
const num = new Set("abc")
console.log(num) ///{'a', 'b', 'c'}

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

```js
const user  = {
    firstName: "ayushi",
    // address: {houseNumber: '1234'}
}
console.log(user.firstName); /// ayushi
console.log(user?.firstName); /// ayushi
console.log(user.address.houseNumber); /// Error // Can't access houseNumber from undefined 
// -> user.address = undefined -> user.address.houseNumber = undefined. houseNumber => Error
console.log(user?.address?.houseNumber); /// Undefined
```
---