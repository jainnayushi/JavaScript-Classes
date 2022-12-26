# Getters and Setters

* Making method - a property => use get ahead
* Changing properties by changing one property => use set 
```js
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){ // fullname is property not method
        return `${this.firstName} ${this.lastName}`}
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;}
}

const person1 = new Person("Ayushi", "Jain", 5);
// console.log(person1.fullName()); /// Ayushi Jain //but aise func ke form me nhi use karna
console.log(person1.fullName); /// Ayushi Jain // since not a method no need to use ()
person1.fullName = "Aditi Jain"; // not changing first, last name -  but directly fullname
console.log(person1.firstName); /// Aditi
```
---
# Static methods and properties
* Works from class, no need to create obj to use them
```js
// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){...}
    set fullName(fullName){...}
    eat(){...}
    isSuperCute(){...}
    isCute(){...}
}

const person1 = new Person("Ayushi", "Jain", 8);
console.log(person1.eat()); /// Ayushi is eating
const info = person1.classInfo(); /// Error // since related to class not object
const info = Person.classInfo(); /// this is person class
console.log(Person.desc); // Static Property /// static property
```
---
# Video 2
---
# How javascript works?
* JS is first compiled. Compilation means 3 things -
1 Tokenization (breaking into chunks)
2 Parsing (Making Abstract Syntax Tree AST)
3 Code Generation (Creating executable code)

1. Compilation is done for 2 things -
1 Early Error Checking (execution se pehle hi error check hoti)
2 Determining Appropriate Scope of Variables

2. Code Execution Phase - After compilation code is executed inside execution context. First context is Global Execution Context

* Global Execution Context has 2 phases -
1 Creation Phase (Memory is alloted to variables and functions) - key:value format
2 Code Execution Phase (Code is run one by one)

* Execution context is stored in call stack - 1st is Global EC then function EC enters and function EC leaves stack as function ends
---
* Creation Phase 
1 Window : {} - global object created by browser
2 this : window - this is assigned same as window
3 var : undefined
4 let/const : uninitialized
5 function(){} : f - whole definition

* Code Execution Phase -
1 Synchronous - sequential - executes line one by one.
2 Single threaded - Executes line 1 completely then only moves to line 2

* Being synchronous helps in asynchronous execution 
---
* Hoisting 
1 Using variables/functions even before they are declared.
2 JavaScript Hoisting refers to the process whereby it appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
3 var - gives undefined when used used before declaration
4 let/const - gives Reference Error - used before initialization. Let/const are hoisted no doubt(declaration to upar pahucha di jaati - memory me to allot kiya jaata) but couldn't be used
5 function(){} - gives whole definition
6 function expressions - acts like variables
7 Arrow function acts like variables
---
* Functions have arguments property which has args i.e. array like object - indexing+length














```js 
1 let foo = "foo";

2 console.log(foo); /// foo

3 function getFullName(firstName, lastName){
    1 console.log(arguments); /// [ayushi, jain]
    2 let myVar = "var inside func";
    3 console.log(myVar); ///var inside func
    4 const fullName = firstName + " " + lastName;

    5 return fullName;}

4 const personName = getFullName("ayushi", "jain"); // const personName = fullName = ayushi jain


// console

// foo
// [ayushi, jain]
// var inside func



```
1. Memory creation - foo : ui, getFullName : f{}, personName : ui in global memory
2. Global execution context - 1,2 chali
3. Function execution context - created 
-> arguments [... , ...], firstname:ayushi, lastname:jain, myVar: ui, fullName: ui - local memory me bane
-> fullName return hua 
4. 4 line chali
---

# Lexical Scoping
Kisme code likha hai 
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. 
But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
# Scope Chain 
Searching in lexical environments when not found in current scope.
Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.

---
Example
```js
const lastName = "jain";

const printName = function(){
    const firstName = "ayushi";
    function myFunction(){
        console.log(firstName); /// ayushi
        console.log(lastName); /// jain // not found->searched in lexical scope->global scope->found->jain
    }
    myFunction()

}
printName();


```
function me last name nhi tha - so it searched in its parent's lexical scope - found - used

---
# Closure - return function inside function
* A closure is a function having access to the parent scope, even after the parent function has closed.
* Function can return functions
* Returned Function = Function + lexical env of parent
```js
function myFunction(power){

    return function (number){
        return number ** power
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans); /// 9
```

---
1. Memory creation phase - window:{}, this:window, myfunc:f, square:ui, ans:ui
2. Global EC - 1 line chali, 2 line par naya function chala
3. Function EC created 
1 memory - arguments:[2], power:2, function:f
2 function returns
3 `function + power` goes in global memory
4. square = function returned
5. returned function called this has `definition + power:2`
1 memory - arguments:[3], number:3
2 has power too power:2 from previous thing
3 number**power
4. done prog
---
# Real time Example of Closure
```js
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Called already!");}}}
const myFunc = func;
myFunc(); /// Hi You Called me - return function + counter:1
myFunc(); /// Called already!
const myFunc2 = func();
myFunc2(); /// Hi You Called me - return function + counter:1
myFunc2(); /// Called already!
```
Jab function return hua toh return + counter:1 bhi saath gya - isiliye dusri baar me counter>1 mila
Dono variable myfunc, myfunc2 alag alag hai isliye first first time me alag set of function call hoga - Jab pehli baar myfunc2 chalega toh counter=0 se shuru hoga

---
