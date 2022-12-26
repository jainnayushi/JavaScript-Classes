# Call
* `func() ~ func.call()`
* `user1.about.call(user2) => user1.about jab call ho - usme user2 as 'this' kaam kare`
* `call() is not applicable for arrow` function
```js
const user1 = {
    firstName : "ayushi",
    age: 8,   
    about: function (){
    console.log(this.firstName, this.age);
    }}
const user2 = {
    firstName : "mohit",
    age: 9,
}
// User1 wants to call about - direct 
user1.about() /// ayushi 8
// User 2 wants to call about - uses call
// user2.about() // mohit 9
user1.about.call(user2) /// mohit 9
// user1.about jab call ho -> usme user2 as this kaam kare
```
---
* Call with extra parameters
```js
// function is outside the object - but used object specifically
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "ayushi",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
}
// user1.about("reading", "abc") //
about.call(user1, "guitar", "mozart"); /// ayushi 8 guitar mozart 
window.about.call(user1, "guitar", "mozart");
```
---
# Apply
* Same as call - `args are passed as array`
```js
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "ayushi",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
}
about.apply(user1, ["guitar", "mozart"]); /// ayushi 8 guitar mozart 
```
---
# Bind
* `returns function` - makes function specific to object
```js
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "ayushi",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
}
const func2 = about.bind(user2, "guitar", "mozart");
func2(); // This func2 is specific about function for user2
```
---
# Arrow function & this
* `Arrow function doesn't have this` - `it takes from surrounding`
* You `can't change object with call` - user1.about.call(user2) not allowed - can't change this
* ek level upar se this leta check
```js

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(); /// undefined undefined
// arrow func takes this from surrounding -> surrounding is not user1 but window
user1.about.call(user2); /// undefined undefined
// You can't change object with call - can't change this
// normally this kya hota user2 -> go level up-> window
```
---
# Short syntax for method
* `about : function(){} ~ about(){}`
```js
const user1 = {
    firstName : "ayushi",
    age: 8,
    about: function (){
        console.log(this.firstName, this.age);
    }   
}
~
const user1 = {
    firstName : "ayushi",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}
user1.about();
```
---
# 1. Function creating & returning object
* creates object - 1. by taking object properties as arg in a function -> 2. creates empty obj -> 3. adds key - value pair -> 4. returns object
```js
function createUser(firstName, lastName, email, age, address){ // 1
    const user = {}; // 2
    user.firstName = firstName; // 3
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;};
    user.is18 =  function(){
        return this.age >= 18;}
    return user;} // 4

const user1 = createUser('ayushi', 'jain', 'ayushi@gmail.com', 19, "my address");
console.log(user1); /// { about: f(), is18 : f(), firstname : ayushi ......}
const about = user1.about(); /// ayushi is 19 years old.
```
---
# 2. Problems with creating object
* Problen : For multiple objects - multiple methods are created - memory fills - however method definition is always same
* Solution : `Create seperate obj for these methods` and use their ref while creating obj
* Har baar create nhi honge bas ek baar ho gye, yaha address store ho jaayeha -> jab call karenge in method ko to us reference par jaakar call ho jaayenge

```js
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
```
---
```js
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; // change
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
const user2 = createUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
const user3 = createUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");
console.log(user1.about()); /// ayusi is 9 years old
console.log(user3.about()); /// ishu is 17 years old
```
---
# __ proto__ or [[prototype]]
* Object.create(obj1)
```js
const obj1 = {
    key1: "value1",
    key2: "value2"}
    
// const obj2 = {
//     key3: "value3"}

console.log(obj2.key3); /// value3
// Requirement - Obj2 should access key1
console.log(obj2.key1); /// Undefined
// Solution - What we want agar obj2 ke paas nhi i.e. key1 toh automatically obj1 se jaake le le
```
```js
// Another way to create empty obj with added properties
const obj2 = Object.create(obj1); // obj1's properties get stored as prototype in obj2
obj2.key3 = "value3";
// obj2 = {
//     key3: "value3"
//         key1: "value1",
//         key2 : "value2",
//     }
console.log(obj2.key3); /// value3
console.log(obj2.key1); /// value1 // Solved
// key1 is searched in obj2 -> Not found -> searches in its prototype - obj1 -> Found
```
---
# How proto works?

* `obj2.__proto__ = Dunder` => obj1 is dunder
* `const user2 = Object.create(user1)` => user2 will have everything of user1 as proto
* So no need to make those things again just use someone else's - by creating user obj with Object.create & take advantage of this bond
```js
const obj2 = Object.create(obj1); //obj1 - Called dunder
obj2.key4 = "value4";
console.log(obj2); /// {key3 : "value3", __proto__ : Object key1 key2}
console.log(obj2.__proto__); ///{key1:value1, key2:value2} 

```
---
# 3. Problem with creating seperate obj for methods
* Problem : When we want add new function - we add in seperate method obj, but we have to add key value of it in every subsequent object - If there are 1000s of obj then adding new func in all is very tedious.
* Solution : `Inplace of creating empty obj - Use proto` - Form empty obj as - const user = Object.create(userMethods) - to bind methods as proto

```js
const userMethods = {
    about : function(){ },
    is18 : function(){ },
    sing: function(){ return 'te amo'; }
    }
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); // {}
    user.firstName = firstName;
    user.address = address;
    return user;}
const user3 = createUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");
console.log(user3.sing()); /// te amo
```
---
# Prototype
* Js function = function + object
* `Prototype : Empty object in function` - like free space
* `Only functions provide prototype property`

```js
// Proof
function hello(){ console.log("hello world"); }
// 1 - Access properties of function
console.log(hello.name); /// hello

// 2 - Add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// 3 - prototype property of function
console.log(hello.prototype); /// {} // This is like free space - empty object in function 

// Add properties in prototype
hello.prototype.abc = "abc";
hello.prototype.sing = function(){ return "lalalla";};
console.log(hello.prototype.abc); /// "abc"
console.log(hello.prototype.sing()); /// lalalla
```
---
# 4. Creating object USING Prototype
* Use prototype inplace of seperate obj for methods - use the free space
* Create empty user like : Object.create(usermethods) -> Object.create(createUser.prototype) -> na mile to prototype me dhundo
```js
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){ 
    return `${this.firstName} is ${this.age} years old.`;};
createUser.prototype.is18 = function (){ return this.age >= 18; }
createUser.prototype.sing = function (){return "te amo ";}

const user1 = createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
const user2 = createUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
console.log(user1.is18()); /// False
```
---
# New keyword - Finalist Form
1. creates empty object -> this = {} (adds all the properties)
2. Return object i.e this
3. Creates bond with prototype automatically -> const user = Object.create(createUser.prototype);

```js
// Constructor function - starts with capital - jo baad me new lagake banay jaayega
function CreateUser(firstName, lastName, email, age, address){
    // const user = Object.create(createUser.prototype);// Not required now
    // user.firstName = firstName; // Not required now
    this.firstName = firstName;
    this.address = address;
    // return user;} // Not required now 
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;};
CreateUser.prototype.is18 = function (){ return this.age >= 18; }
createUser.prototype.sing = function (){return "te amo ";}

const user1 = new createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
console.log(user1.is18()); /// False
```
---
# hasOwnProperty()
* Generally key means -> own key + prototype's key 
* `We want only object's key and not from prototype` - use hasOwnProperty() 
* hasOwnProperty(key) - returns T/F
```js
const user1 = new createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
const user2 = new createUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
const user3 = new createUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");

for(let key in user1){
    console.log(key); /// firstname last... is18 sing // own key + prototype's key
    if(user1.hasOwnProperty(key)){
        console.log(key); 
    }
}
```
---
# Class - Next finalist
* `Classes are fake` - because internally function ke form me hi ho rha hoga
* Problem -
```js
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;}
    is18(){
        return this.age >= 18;}
    }
const user1 = new CreateUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
const user2 = new CreateUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
const user3 = new CreateUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");
console.log(Object.getPrototypeOf(user1)) /// {constructor about, is18, sing}
```
---
* _ _ proto _ _ ~ [[prototype]]
# Journey of function by now
1. Empty obj, add variables and functions, return obj
2. Seperate obj for functions, Empty obj, add variables and functions from that obj, return obj
3. Empty obj using `Object.create(userMethods)`, add variables, return obj
4. Empty obj using `Object.create(createUser.prototype)`, add variables, add functions using `createUser.prototype.func`, return obj
5. Create obj using new, add variables using this, add functions using `createUser.prototype.func`
6. Create obj using new, Make class, function as constructor, add variables and functions using this

---
# Inheritence - extends
* Create Animal class - 2 properties : name, age - 3 methods
```js
// super Class
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;}
    eat(){
        return `${this.name} is eating`;}
    isSuperCute(){
        return this.age <= 1;}
    isCute(){
        return true;}
}
const ani1= new Animal("tom", 2);
console.log(ani1.eat()) /// tom is eating

// sub Class
class Dog extends Animal{
    bark(){
        return `${this.name} barks`;}}
} 

const tommy = new Dog("tommy", 3); 
// constructor of Animal class called bcoz there is no constructor of dog class
console.log(tommy); // gets everything of animal + own /// name, age  .... cute, bark
console.log(tommy.bark()); /// tommy barks
```
---
# Subclass
```js
class Dog extends Animal{
    constructor(name,age, speed){
        super(); // to use name, age from parent class
        this.speed = speed;
    }
    run() { return `${this.name} runs at ${this.speed}kmph` }
    // Change parent's method
    // eat(){
    //     return `${this.name} loves bone`
    // }
} 

const tommy = new Dog("tommy", 3, 45); 
console.log(tommy.run()) /// tommy runs at 45 kmph // Own method

// when eat() not there in child
console.log(tommy.eat()) /// tommy is eating // Parent's method 
// when eat() there in child
console.log(tommy.eat()) /// tommy loves bone // Own method 
```
---
