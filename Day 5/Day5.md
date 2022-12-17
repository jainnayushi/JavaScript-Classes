<!-- ---
marp: true
theme: default
paginate: true
--- -->
# Array Insert- Delete Operations
### Can change original array
* Push - Inserts element at the end
* Pop - Removes element from the end and `also returns it`
* Unshift - Inserts element at the beginning
* Shift - Removes element from the beginning and `also returns it`
### Push - Pop are faster than Shift-Unshift
* (Coz in shift unshift, all the array elements have to be shifted for addition/removal in the starting so rearrangement of elements take time)
---

```js
let fruits = ["apple", "mango", "grapes"];
                 0         1        2        
```
```js
// push 
fruits.push("bananaaaa");
console.log(fruits); /// ["apple", "mango", "grapes", "bananaaa"]
```
let fruits = ["apple", "mango", "grapes"];

```js
// pop 
let poppedFruit = fruits.pop(); // returns too
console.log(fruits); ///["apple", "mango"]
console.log("popped fruit is", poppedFruit); /// Popped fruit is grapes
```
let fruits = ["apple", "mango", "grapes"];
```js
// unshift 
fruits.unshift("banana"); 
fruits.unshift("myfruit"); 
console.log(fruits); /// ["myfruit","banana","apple", "mango", "grapes" ]
```

```js
// shift 
let removedFruit = fruits.shift(); // returns too
console.log(fruits); /// ["mango", "grapes"];
console.log("removed fruits is ", removedFruit); /// Removed fruit is apple 
```
---
# Primitive vs Reference data types

```js
// Primitive type - number -> Stack -> Different memory location -> Values are independent 
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1); /// 6
console.log("value is num2 is", num2); /// 6
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1); /// 7
console.log("value is num2 is", num2); /// 6
```
```js
// Reference type - array -> Heap -> Share same adress -> Values are dependent
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1); /// ["item1", "item2"]
console.log("array2", array2); /// ["item1", "item2"]
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1); /// ["item1", "item2", "item3"]
console.log("array2", array2); /// ["item1", "item2", "item3"]
```

---
# Cloning array
* 1 - Copying - Not correct for large arrays
let array2 = ["item1", "item2"];
* 2 - Slicing
let array2 = array1.slice(0);
* 3 - Concatenation
let array2 = [].concat(array1); 
* 4- Spread Operator
let array2 = [...array1];


```js
// 1 - Copying - Not correct for large arrays
let array1 = ["item1"................. "item1000"];
let array2 = ["item1" ................ "item1000"];
```
---

```js
// 2 - Slicing
let array1 = ["item1", "item2"];
let array2 = array1.slice(0); 
```
```js
// 3 - Concatenation
let array1 = ["item1", "item2"];
let array2 = [].concat(array1); // array1.concat(array2)
```
```js
// 4- Spread Operator
let array1 = ["item1", "item2"];
let array2 = [...array1];
```

---

# Concatenaton
array 1 + "item3" + "item4"

```js
let array1 = ["item1", "item2"];
// 1 - Slicing + Concatenation
let array2 = array1.slice(0).concat(["item3", "item4"]);
// 2 - Concatenation
let array2 = [].concat(array1,["item3", "item4"]);
// 3 - Spread Operator 
let array2 = [...array1, "item3", "item4"];
// ...arr = elements of arr => a,b,c
// arr = array => [a,b,c] 
```
---
# Array Destructuring

```js
const myArray = ["value1", "value2", "value3","value4"];

// 1 - Getting 2 values 
let [myvar1, myvar2] = myArray;
console.log("value of myvar1", myvar1); /// value1
console.log("value of myvar2", myvar2); /// value2 

// Rest Operator
// 2 - Getting 2 values and rest in other variable
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1); /// value1
console.log("value of myvar2", myvar2); /// value2
console.log(myNewArray); /// [ "value3","value4"]

// 3 - Skipping values
let [myvar1, ,myvar3] = myArray;
console.log("value of myvar1", myvar1); /// value1
console.log("value of myvar3", myvar3); /// value3

// 4 - Destructing values more than array contains
const myArray = ["value1"]; 
let [myvar1, myvar2, myvar3] = myArray;
console.log("value of myvar1", myvar1); /// value1
console.log("value of myvar2", myvar2); // Undefined
console.log("value of myvar3", myvar3); // Undefined
```
---
# Loop in Array
```js
let fruits = ["apple", "mango", "grapes"];
                 0        1         2
// 1 - Normal loop

let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]); /// each element /// apple mango grapes
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2); /// ["APPLE", "MANGO", "GRAPES"]
```
```js
// 2 - While loop
let fruits2 = [] ;
let i = 0;
while(i<fruits.length){
    console.log(fruits[i]); /// each element /// apple mango
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2); /// ["APPLE", "MANGO", "GRAPES"]
```
