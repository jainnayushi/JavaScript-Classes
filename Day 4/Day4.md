---
marp: true
theme: default
paginate: true
---
# Loops

# For loop
for (initialization; condition; increment)  
{  
    code to be executed  
}  
```js
for (i=1; i<=5; i++)  
{  
console.log(i)  
}  
```
---

# While loop
while (condition)  
{  
    code to be executed  
}  
```js
var i=11;  
while (i<=15)  
{  
console.log(i);  
i++;  
}  
```
---

# Do while loop
do{  
    code to be executed  
}while (condition);  
```js
var i=21;  
do{  
console.log(i );  
i++;  
}while (i<=25); 
``` 

---
# For , While, Do - While Loop
0 -  9
<!-- i<=9 ~ i<10 -->
```js
// for
for(let i = 0;i< =9;i++){
    console.log(i);
} /// 0 1 2 3 4 5 6 7 8 9

// while
let i=0;
while(i<=9){
    console.log(i);
    i++;
} /// 0 1 2 3 4 5 6 7 8 9

// do while
let i = 10; - 11
do{
    console.log(i); /// 10
    i++;
}while(i<=9); 
console.log("value of i is ", i); /// 11 
```
---
* Story
1 2 3 4 5 6 7 8 9
1. 4 - stop work - 1 2 3 - break
2. 4 - skip - 1 2 3  5 6 7 8 9 - continue

---
# Break and Continue
* Break - Comes out of the inner loop
        - Terminates
* Continue - `Goes to next iteration -> incremental step`
           - Skips

```js
for(let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i); // 1 2 3
} /// i - 1 - 2 - 3 - 4 

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i); // 1 2 3 5 6 7 8 9 10
} /// 1 2 3 5 6 7 8 9 10
```
---
# Switch Statement

```js
let day = 9; // Invalid Day 
 day = 0  // Sunday  Monday Tuesday

switch(day){
    case 0:
        console.log("Sunday");
    case 9:
        console.log("Monday");
    case 11:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}

```
---
# Array
```js
let mixed = [1,2,2.3, "string", null, undefined];
// Type of
console.log(typeof mixed); /// Object

// Check if its really array
console.log(Array.isArray(mixed)); /// True

console.log(Array.isArray("ftugj")); /// False

// Indexing
console.log(mixed[1]); ///2

```
---
* `Values inside const array can be changed`
* Value of const primitive type can not be changed
```js
const pi= 3.14;
pi= 3; /// Error //address changed

const mixed = [1,2,2.3, "string", null, undefined];
mixed[1]="hey" // no error
console.log(mixed); /// [1,"hey",2.3, "string", null, undefined] // Adress didn't change
const mixed = ['a','b']; /// Error // Address got changed
```
