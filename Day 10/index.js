// // // 1 - Empty obj, add variables and functions, return obj
// // // {firstName:'ayushi', lastName:'jain', about: f(){}, is18:f(){}}

// // function createUser(firstName, lastName, email, age, address) {
// //   // 1
// //   const user = {}; // 2
// //   user.firstName = firstName; // 3
// //   user.lastName = lastName;
// //   user.email = email;
// //   user.age = age;
// //   user.address = address;
// //   user.about = function () {
// //     return `${this.firstName} is ${this.age} years old.`;
// //   };
// //   user.is18 = function () {
// //     return this.age >= 18;
// //   };
// //   return user; // 4
// // }

// // const user1 = createUser("ayushi","jain", "ayushi@gmail.com",19,"my address");
// // // {firstName:'ayushi', lastName:'jain', about: f(){}, is18:f(){}}
// // const user2 = createUser("ashi", "jain", "ashi@gmail.com", 19, "my address");
// // // {firstName:'ashi', lastName:'jain', age:19, about: f(){}, is18:f(){}}
// // const user3 = createUser("ishu", "jain", "ishu@gmail.com", 17, "my address");
// // console.log(user1); /// { about: f(), is18 : f(), firstname : ayushi ......}

// // // user1 : {firstName:'ayushi', lastName:'jain', about: f(){this.firstName}, is18:f(){}}
// // const about = user1.about(); /// ayushi is 19 years old.
// // const about3 = user3.about(); /// ishu is 17 years old.

// // //------------------------------------------------------------------------------
// // //------------------------------------------------------------------------------

// // // 2 Seperate obj for functions, Empty obj, add variables and functions from that obj, return obj

// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// function createUser(firstName, lastName, email, age, address) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethods.about; // change
//   user.is18 = userMethods.is18;
//   return user;
// }

// const user1 = createUser("ayushi", "jain", "ayushi@gmail.com", 9, "my address");
// // {firstName:'ayushi', lastName:'jain', about: 2xxxx768y, is18:2xxxx67}
// const user2 = createUser("ashi", "jain", "ashi@gmail.com", 19, "my address");
// const user3 = createUser("ishu", "jain", "ishu@gmail.com", 17, "my address");
// console.log(user1.about()); /// ayusi is 9 years old
// console.log(user3.about()); /// ishu is 17 years old

// // //------------------------------------------------------------------------------
// // // Go
// // //------------------------------------------------------------------------------

// // // 3 Empty obj using `Object.create(userMethods)`, add variables, return obj

// const userMethods = {
//     about : function(){ },
//     is18 : function(){ },
//     sing: function(){ return 'te amo'; }
//     }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods); // {}
//     user.firstName = firstName;
//     user.address = address;
//     return user;}
// const user3 = createUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");
// // console.log(user3) {firstName:"ishu", lastName:'jain'. . . address: "" + prototype}
// console.log(user3.sing()); /// te amo
// // //------------------------------------------------------------------------------
// // // Go ------------------------------------------------------------------------------

// // // 4 Empty obj using `Object.create(createUser.prototype)`, add variables, add functions using `createUser.prototype.func`, return obj
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;};
// createUser.prototype.is18 = function (){ return this.age >= 18; }
// createUser.prototype.sing = function (){return "te amo ";}

// const user1 = createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
// const user2 = createUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
// console.log(user1.is18()); /// False

// // //------------------------------------------------------------------------------
// // //------------------------------------------------------------------------------

// // // 5 Create obj using new, add variables using this, add functions using `createUser.prototype.func`

// function CreateUser(firstName, lastName, email, age, address){
//     // const user = Object.create(createUser.prototype);// Not required now
//     // user.firstName = firstName; // Not required now
//     this.firstName = firstName;
//     this.address = address;
// }
//     // return user;} // Not required now
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;};
// CreateUser.prototype.is18 = function (){ return this.age >= 18; }
// createUser.prototype.sing = function (){return "te amo ";}

// const user1 = new createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
// console.log(user1.is18()); /// False

// // //------------------------------------------------------------------------------
// // //------------------------------------------------------------------------------

// // // 6 Create obj using new, Make class, function as constructor, add variables and functions using this

// // class CreateUser{
// //     constructor(firstName, lastName, email, age, address){
// //         this.firstName = firstName;
// //         this.address = address;
// //     }
// //     about(){
// //         return `${this.firstName} is ${this.age} years old.`;}
// //     is18(){
// //         return this.age >= 18;}
// //     }
// // const user1 = new createUser('ayushi', 'jain', 'ayushi@gmail.com', 9, "my address");
// // const user2 = new createUser('ashi', 'jain', 'ashi@gmail.com', 19, "my address");
// // const user3 = new createUser('ishu', 'jain', 'ishu@gmail.com', 17, "my address");
// // console.log(Object.getPrototypeOf(user1)) /// {constructor about, is18, sing}

// // const obj1 = {
// //   key1: "value1",
// //   key2: "value2",
// // };

// // // key:value + prototype {}

// // const obj2 = Object.create(obj1);
// // obj2.key3 = "value3";
// // // console.log(obj1);

// // // console.log(obj2);
// // console.log(obj2.__proto__);
// // // console.log(obj2.[[Prototype]]);
