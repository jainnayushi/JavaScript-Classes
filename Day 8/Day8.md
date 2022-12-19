# Array Methods

### forEach Method : `array.forEach(callback function)`
* Calls callback function for each of its element
* Default params of callback are `(element, its index)` - index is in our hand we want to use/not
```js
const num = [4,2,5,8,10];

var myFunc = function (number, index){
    console.log(`index is ${index} number is ${number}`);}

// // 1 - Using for loop
// for( let i=0 ; i<num.length ; i++){ 
//     myFunc(num[i], i); 
//     }
//  i - 1 - 2- 3 - 4
//  function call 1 - (4,0)
//   2 - (2,1)

// 2 - Using forEach()
num.forEach(myFunc)

num.forEach((number, index) => {
    console.log(`index is ${index} number is ${number}`);})

// 1 - myFunc(4, 0) - index is 0 number is 4
// 2 - myFunc(2, 1)
// 3 - myFunc(5, 2)
// 4 - myFunc(8, 3)

// 3 - Using forEach() - anonymous callback
num.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);});
```
---
# Practical example of forEach

```js
// users - array of objects
const users = [
    {firstName: "ayushi", age: 23},
    {firstName: "ashi0", age: 21},
    {firstName: "ashi1", age: 22},
    {firstName: "ashi2", age: 20},
]

// For of loop
for(let user of users){
    console.log(user.firstName); // ayushi ashi0 ashi1 ashi2
}
// forEach()
users.forEach((user) => {
    console.log(user.firstName);
});
```
---
# Map Methods

### Map Method : `array.map(callback function)`
* Calls callback function for each of its element
* `Callback func always returns something`
* `map() forms a new array` (stores undefined if callback doesn't return)
* Default params of callback are (element, its index (optional))
```js
const numbers = [3,4,6,1,8];
//  Req - [9,16,36,1,64]

const square = function(number){
    return number*number;
}
const squareNumber = numbers.map(square);
console.log(squareNumber) /// [9,16,36,1,64]
// or
const squareNumber = numbers.map((number)=>{
    return number*number ;
});
console.log(squareNumber); /// [9,16,36,1,64]
```
---

# Practical example of map()
```js
const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]
const userNames = users.map((user)=>{
    return user.firstName;
}); // forms an array
console.log(userNames); ///[harshit,mohit..]
```
---
# Filter() :` array.filter(callback)`
* For each element callback `returns true/false`
* Forms an array with elements returning true

```js
const numbers = [1,3,2,6,4,8];
// array of even numbers
const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
}); // 2,4,6,8 returns true
evenNumbers = [2,6,4,8]
1 - 1 - false
2 - 3 - false
3 - 2 - true
4 - 6 - true
console.log(evenNumbers); ///[2,4,6,8]
```
--- 
# Reduce() 
### `array.reduce((accumulator, current value) => {}, initial value)`
* returns single value
* (accumulator and current value are like in fibonacci)
```js
// 1. Without initial value -> aim : sum of all the numbers in array 
const numbers = [1,2,3,4,5,10];
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum); /// 25

// accumulator          currentValue            return 
// 1 (first element)    2(second element)       3 
// 3 (return)           3(third element)        6
// 6                    4                       10
// 10                   5                       15
// 15                   10                      25
```
---
```js
// 2. With initial value -> aim : sum of all the numbers in array 
const numbers = [1,2,3,4,5,10];
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},100);
console.log(sum); /// 125

// accumulator          currentValue            return 
// 100 (initial value)  1(first element)        101
// 101 (return)         2(secons element)       103 
// 103                  3                       106
// 106                  4                       110
// 110                  5                       115
// 115                  10                      125
```
---
# Practical example of reduce
```js
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]
const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);

// total price      currentValue         return 
// 0                12000                12000
// 12000            22000                34000
// 34000            15000                49000
```
---
