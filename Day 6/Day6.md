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
