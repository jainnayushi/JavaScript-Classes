# Sort()

* `Changes original array`
* `Sorts everything thinking as string`
* `Capital letters sorts first then small letters`
* Solution :- array.sort(callback(a, b) { return a-b/ b-a} )
* Descending : b-a, Ascending : a-b
### ASCII Values
* char : ascii value
* '0' : 48..........'9' : 57
* 'A' : 65..........'Z' : 90
* 'a' : 97..........'z' : 122
---
* Problem
```js
const num = [5, 9, 1210, 410, 3000] // -> ["5", "9", "1210", "410", "3000"];//interpret as string
num.sort();
console.log(num) /// [1210, 3000, 410, 5, 9] 
// Working 1 -> 3 -> 4 -> 5 -> 9 and  5, 9, 410, 1200, 3000 (expected)

// Sorts capital first
const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
userNames.sort();
console.log(userNames); //[ABC, Harshit, aabc, abcd, harshit, mohit, nitish]
```
* Solution
```js
const numbers = [5, 9, 1200, 410, 3000];
numbers.sort((a,b)=>{
    return b-a;});
console.log(numbers); /// [5, 9, 400, 1200, 3000]
// Working - ex : 1200,410 ->  a-b ---> 790 -> 410, 1200
// a-b ---> postive (greater than 0) ---> b, a => 410 , 1200 => order change
// 5, 9 ---> -4 
// a-b ---> negative ----> a,b => 5, 9 => order same
```
---
# Practical example of sort()

```js
// Sort price High to Low or vice-versa
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]
// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{ // using slice(0) to clone new array
    return a.price-b.price
});
// highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
```
---
# Find()
* Callback func iterates for every element
* `arr.find(callback{return...})`
* `Returns first occurence`
```js
const myArray = ["Hello", "cat", "dog", "lion"];
// Callback func seperately
function isLength3(string){
    return string.length === 3;
}
const ans = myArray.find(isLength3);
// or
const ans = myArray.find((string)=>{
    return string.length===3;  
});
console.log(ans); ///cat
```
---
# Practical example of find()
```js
const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];
// req - obj which has 3 as userid
const myUser = users.find((user)=>user.userId===3);
console.log(myUser); /// {userId : 3, userName: "nitish"}
```
---
# every() 
* Callback `returns true/false`
* Every() returns true/false -> true if all elements follow callback condition 
-> callback should be true for every element -> then every will return true
```js
const numbers = [2,4,6,8,10, 11, 23];
const ans = numbers.every((number)=>number%2===0);
console.log(ans); /// false

# Practical example
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]
const ans = userCart.every((cartItem)=>cartItem.price > 30000);
console.log(ans); /// False
```
---
# Some()
* Callback `returns true/false`
* some() returns true/false -> true if any one elements follow callback condition 
* if atleast one follows callback condition

```js
const numbers = [3,5,11,9,6];
const ans = numbers.some((number)=>number%2===0);
console.log(ans); // true

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 250000},
]
const ans = userCart.some((cartItem)=>cartItem.price > 15000);
console.log(ans); /// True
```
---
# fill()
* used to fill array with something
[start, end)
* `arr.fill(value) or (value , start , end(excluding end))`  
```js
// 1 - create array of some length, filled with something
const myArray = new Array(10).fill(0); // 10 - length of array, fill with 0
console.log(myArray); ///[0,0,0,0,0,0,0,0,0,0]

// 2 - fill something in between of already made array
const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray); ///[1,2,0,0,0,6,7,8]
```
---
# splice()
* `arr.splice(start index , # delete items , insert items)`
* returns array of deleted items
* `Changes original array`

```js
let myArray = ['item1', 'item2', 'item3'];
                  0        1        2
// 1 - delete
const deletedItem = myArray.splice(1, 2); //starting with index 1, delete 2 items
console.log("deleted item", deletedItem); ///['item2', 'item3']
console.log(myArray) /// ['item1]

// 2 - insert 
const insertedItem = myArray.splice(1, 0, 'inserted item');
// insert at index 1, insert 'inserted item'
console.log("inserted item", insertedItem); /// [] // since no delete

// 3 - insert and delete 
const Item = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("item", Item); /// ['item2', 'item3']
console.log(myArray); /// ['item1', 'inserted item1', 'inserted item2'] // Changes original array check
```
---
---
# Object Oriented : Methods & this
* Method - Function inside Object
* This - this is that object, whih calls the method
```js
function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);}

const person1 = {
    firstName : "ashi",
    age: 1,
    about: personInfo}

const person2 = {
    firstName : "ishu",
    age: 2,
    about: personInfo}
    
const person3 = {
    firstName : "ayushi",
    age: 3,
    about: personInfo}

person1.about(); /// Person name is ashi and age is 1   
person2.about(); /// Person name is ishu and age is 2
person3.about(); /// Person name is ayushi and age is 3
```
--- 
# Window
* window - global object
* `this!=window in strict mode`
* `myFunc() ~ window.myFunc()`
```js
console.log(this); /// Window{.......}
console.log(window); /// Window{.......}
console.log(this === window) /// True

// "use strict";
function myFunc(){
    console.log(this); /// Window{.......}
}
myFunc(); // ~ window.myFunc()

"use strict"; // this!=window in strict mode
function myFunc(){
    console.log(this); /// Undefined 
}
myFunc();
```
---
