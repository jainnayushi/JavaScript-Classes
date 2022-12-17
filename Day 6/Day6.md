# Loops Continued
let fruits = ["apple", "mango", "grapes"];

# 3 - for of loop - Element
```js
for(let item of fruits){
    console.log(item);    
}
/// apple mango grapes
```
# 4 - for in loop - Index
```js
for(let index in fruits){
    console.log(index);   
    console.log(fruits[index])
}
/// 0 1 2
/// apple mango grapes
```
---
# Iterables
* `for of` loop could be used
* `Iterables - string , array, map, sets `
* `object is not iterable`
* ` Array like object - String` - has indexing, length property
```js
const firstName = "Ayushi";
for(let char of firstName){
    console.log(char); /// A y u s h i
}
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item); /// 'item1', 'item2', 'item3'
}
// Array like object - string
const firstName = "ayushi";
console.log(firstName.length); /// 6
console.log(firstName[2]); /// u
```

# Objects
* Arrays are good but not sufficient for real world data.
* Objects store key value pairs.
* Objects don't have index.
* Creating object using {}
* `keys are always string`
# Object Creation
```js
const person = {
    name: "ayushi",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person); /// {name: "ayushi",age: 22,hobbies: ["guitar", "sleeping", "listening music"]}
console.log(typeof person); /// Object
```
---
# Accessing data from objects
```js
console.log(person["age"]); ///22 // key should be ""
console.log(person.hobbies); /// ["guitar", "sleeping", "listening music"]
```
# How to add key values ?
```js
// 1
person["gender"] = "male";
console.log(person);
// 2
person.gender = "male";
console.log(person);
```
---
# When to use which `. or [" "]` ?
```js
// 1 : When keys are of two or more words ex - person hobbies : Use [""]
const person = {
    person hobbies: ["guitar", "sleeping", "listening music"] // Error
    "person hobbies": ["guitar", "sleeping", "listening music"] 
}
console.log(person.person hobbies); // Error // 1
console.log(person["person hobbies"]); // 2
```
```js
// 2 : When key is a variable : Use [""]
const key = "email";
const person = {..........}
// 1
person.key = "ayushi@gmail.com";
console.log(person); 
/// const person = {key:"ayushi@gmail.com",name: "harshit",age: 22,"person hobbies"} //key became key
// 2
person[key] = "ayushi@gmail.com"; 
console.log(person);
/// const person = {email:"ayushi@gmail.com",name: "harshit",age: 22,"person hobbies":} 
// email became key 
// Its person[key] not person["key"] because key is variable
```
---
---
# Loop in Objects
### For in loop : obj
```js
for(let key in person){
    console.log(key," : ",person[key]);
    } /// name : ayushi...  // i = key, obj[i] = value
```
### Object.keys(object name) - returns - array of keys
```js
console.log(Object.keys(person)); /// [name, age, hobbies] 
// Object.key(obj) returns array of keys with obj's keys as elements

console.log(typeof (Object.keys(person))); /// Object
const val = Array.isArray((Object.keys(person))); /// True
```
### For of loop : Object.keys(obj)
```js
for(let key of Object.keys(person)){
    console.log(key); // name age hobbies
    console.log(person[key]);} // ayushi 22 []
```
---
# Computed Properties
```js
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Task : const obj = {
//        objkey1 : "myvalue1",
//        objkey2 : "myvalue2",}
// 1
const obj = {
    [key1] : value1,
    [key2] : value2
} // For key - [variable], For value - use directly

// 2
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
```
---
# Spread Operator
```js
// spread operator in Array
const array1 = [1, 2, 3..............3000];
const array2 = [5, 6, 7];

const newArray = [...array1, 89, ...array2, 69]; /// [1 2 3 89 5 6 7 69]
```
```js
// spread operator in String
const newArray = [..."ayushi"];
console.log(newArray); /// a y u s h i
```
---
```js
// spread operator in Objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

console.log(...obj1, ...obj2); 
{
  key1: "valueUnique",
  key2: "value2",
  key3: "value3",
  key4: "value4",
}
(...obj2, ...obj1)
{
  key1: "value1",
  key3: "value3",
  key4: "value4",
  key2 : "value2"
}
---
// Key1 won't be two, `keys are unique`. In case of duplicacy baad vale ki value use hoti
console.log(obj1); /// {key1: "value1",key2: "value2"}
console.log(obj2); /// {key1: "valueUnique",key3: "value3",key4: "value4"}
console.log(...obj1, ...obj2); 
/// {key1: "valueUnique",key2: "value2",key3: "value3",key4: "value4"}
console.log(...obj2, ...obj1); 
/// {key1: "value1",key3: "value3",key4: "value4",key2: "value2"}
const newObject = { ...obj2, ...obj1, key69: "value69" }; 
/// {key1: "value1",key3: "value3",key4: "value4",key2: "value2", key69: "value69" }
```
* Creating obj from iterables
```js
const newobj = {..."abc"} /// {0:"a", 1:"b", 2:"c"}
const newObject = { ...["item1", "item2"] }; /// {0:"item1", 1:"item2"}
```
---
# Object Destructuring
```js
const band = {
  bandName: "led zeppelin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
let { bandName, ...restProps } = band;
console.log(bandName); /// led zeppelin
console.log(restProps); /// {famousSong: "stairway to heaven",year: 1968, anotherFamousSong: "kashmir"}

// Changing variable name after destructuring
let {bandName : contestant, famousSong : var2} = band;
console.log(contestant); /// led zeppelin
```
---