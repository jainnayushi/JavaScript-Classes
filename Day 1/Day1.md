---
marp: true
theme: default
paginate: true
---
# About JavaScript
* JavaScript (JS) is the world’s most popular lightweight, interpreted compiled programming language. It is also known as a scripting language for web pages. It can be used for Client-side as well as Server-side developments.
* JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
---
# History
* 1995 -> Netscape Navigator browser
* `Brendan Eich` -> 10 days -> Named Mocha -> LiveScript -> JavaScript (publicity)
* 1996 -> Internet Explorer -> old + new features -> JScript
* Problem -> Website works well in either of the browser -> best viewed
### ECMA (standarizes lang) -> Named ECMAScript
* ECMAScript is a JavaScript standard intended to ensure the interoperability of web pages across different browsers.
* ES1 - 1997
  ...
  ES6 - 2015
  ...
  ES 2021
* TC39 (Technical Community 39) now decides JS Release
 ---
### Java V/S JavaScript
* JavaScript is named after Java, and many ideas are borrowed from the Java language. 
* Other than that, Java and JavaScript are two entirely distinct languages. 
* The most significant difference between them is that Java is a compiled language, and JavaScript is a interpreted language. 
* JavaScript runs on many browsers out-of-the-box, whereas Java applets require an additional plug in. 
* Both languages have different runtime environments, different governing bodies, different libraries.

---
# Linking JS files with HTML
1. Script line in HTML file in head tag
`<script src="./1.js"></script>`

2. Script line in HTML file in body tag in the end
`<script src="./1.js"></script>`

3. Script line in HTML file in head tag + async
`<script src="./1.js" async ></script>`

4. Script line in HTML file in head tag + async
`<script src="./1.js" defer ></script>`
* This we prefer - reason we will see later

---
# Details
### JavaScript Programs
* A computer program is a list of "instructions" to be "executed" by a computer.

* In a programming language, these programming instructions are called statements.

* A JavaScript program is a list of programming statements.

### Comments
### Variables
### Operators

----

# Strict Mode

* Is a way to opt in to a restricted variant of JS. `Use it to avoid mistakes`. 
* There are some things like ;, which JS ignores but should be taken care by programmer so use this mode. It will remind of such mistakes
* The "use strict" directive was `new in ECMAScript version 5`. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
* Strict mode makes it easier to write "secure" JavaScript, changes previously accepted "bad syntax" into real errors.
* In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

```js
"use strict";
let x;
```
---
# Naming Variables
* letters + $ + _ + number
* Can't start with number
* Can use underscore or `dollar $` symbol 
* Can't use spaces 
  first_name - Snake Case,
  firstName - Camel Case (convention)

---

# Data Types (Primitive)

* string 
* number
* booleans  true false
* undefined
* null 
* BigInt
* Symbol

# Falsy Values

* False, "", null, undefined, 0 
---

# typeof Operator
* `Bug in Javascript` typeof Null = Object

```js
let myVariable = null;
console.log(typeof myVariable); /// Object //exception
```
For rest primitive datatypes its same as type

# BigInt

```js
console.log(Number. MAX_SAFE_INTEGER); /// 9007199254740991 // largest int
// Creating BigInt
// 1
let x = BigInt(2); //it can be a very small number
// 2
let y = 3n;
//Operations
console.log(x+y) ///5n
```
---
# Conversion Trick

Convert String to Number
```js
// 1
let age = +"18";
console.log(typeof myStr); ///Number //18
// 2
age = Number(age);
console.log(typeof age); ///Number //18
```

Convert Number to String
```js
// 1
let age = 22; 
age = age + "";
console.log(typeof(age)); ///String //"22"
// 2 
age = String(age);
console.log(typeof age); ///String
```
---
# Let vs Const vs Var
* let
1. Simple initialization
2. Simple declaration
3. `Can't be redeclared`
4. Can be reinitialized

* const
1. Initialization is must with declaration
2. `Can't be redeclared`
3. `Can't be reinitialized`

* var
1. Everything is simple
---
* Initilization - Declaration - Redeclaration - Reinitialization
```js
1101
let firstName;
let firstName = "ashi";
let firstName = "ayushi"; Error // can't declare again
firstName = "jain"; // can reinitialize
```
```js
1*1*00
const firstName; Error // can't just declare, have to initialize
const firstName = "ashi";
const firstName = "ayushi"; Error // can't declare again
firstName = "jain"; Error // can't reinitialize
```
```js
1111
var firstName;
var firstName = "ashi";
var firstName = "ayushi"; // can declare again
firstName = "jain"; // can reinitialize
``` 
---\]