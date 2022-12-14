// String Concatenation

// string + string = string
// string + number = string
// number + number = number

console.log(1 + "2"); // string // "1"+"2" - "12"
console.log(1 + "2" + 3); //  123
console.log(1 + 8 + 3); //12
console.log("ayushi" + 1); // ayushi1
console.log("ayushi " + 1); // ayushi 1

// --------------------------------------------------

var num1 = 10;
var num2 = 4;
var num3 = 10;
console.log(num1 < num2); // false
console.log(num1 > num2); // true
console.log(num1 <= num2);
console.log(num1 >= num3);

// && || !
var x = 13;
var y = 5;
// True && True = True
// False && anything = False
// True && False = False

console.log(x < 10 && y == "ayushi"); // false
console.log(x > 7 && y < 1); // false
console.log(x > 7 && y > 1); // true
console.log(0 && 1 && "foo"); // false
console.log(1 && "foo"); // foo
console.log(0 && "foo"); // false
console.log("" && "foo"); // false
console.log("oo" && "foo"); // foo
console.log("hey");
console.log(console.log("oo") && console.log("foo")); /// oooo undefined
console.log("byee");

// || OR

// True || True = True
// False || False = False
// True || False = True
// False || True = True
// x - 13 y-5
console.log(x == 5 || y == 5); // true
console.log(x > 5 || y == 9); // true

// ! NOT
// !True = False
// !False = True
console.log(!(x > 1)); // false
console.log(!(x == y)); //true
console.log(!(x != y)); // true

// Ternary
var z = x > 18 ? console.log("Eligible") : console.log("Not Eligible");

// If else
// 1
// x = 7
if (x > 18) {
  console.log("Eligible"); // true
} else {
  console.log("Not Eligible"); // false
}
// x 19
var g = x > 18 ? console.log("Eligible") : console.log("Not Eligible");

// 2
var a = 20;
if (a == 10) {
  console.log("a is 10");
} else if (a == 15) {
  console.log("a is 15");
} else {
  console.log("bye");
}

var g =
  a == 10
    ? console.log("a is 10")
    : a == 15
    ? console.log("a is 15")
    : console.log("bye");

// Nested If else
// var gen = female

// if (gen == "female") {
//   ...
// }
// else if (gen == "male") {
//   ...
// }
//  else {
//   ...
// }
// {} - block
var a = 17;
if (a == 10) {
  console.log("a is equal to 10");
} else if (a == 15) {
  console.log("a is equal to 15");
} else if (a == 20) {
  console.log("a is equal to 20");
} else {
  console.log("a is not equal to 10, 15 or 20");
}

// For loop

for (i = 1; i < 10; i++) {
  console.log(i);
}

for (i = 0; i <= 9; i++) {
  console.log(i);
}

// if else
// nested if else
// ternary operator

// Switch
// 1
var a = 10;
switch (a) {
  case 10:
    console.log("a is equal to 10");
    break;
  case 15:
    console.log("a is equal to 15");
    break;
  case 20:
    console.log("a is equal to 20");
    break;
  default:
    console.log("a is not equal to 10, 15 or 20");
}

// 2
var a = 15;
switch (a) {
  case 10:
    console.log("a is equal to 10");
  case 15:
    console.log("a is equal to 15");
  case 20:
    console.log("a is equal to 20");
  default:
    console.log("a is not equal to 10, 15 or 20");
}
