/// String Operations
var a = "Hello World";
         012345678910 
         
console.log(a[3]); ///// Answer = l
console.log(a[13]); ///// Answer = undefined
// Learn Slicing
console.log(a.slice(2, 8)); ///// Answer = llo Wo
console.log(a.slice(0, 7)); ///// Answer = Hello W
// Learn Negative index in slicing
console.log(a.slice(-7, -1)); ///// Answer = o Worl
console.log(a.slice(0, -1)); ///// Answer = Hello Worl
// End is optional
console.log(a.slice(2)); ///// Answer = llo World
console.log(a.slice(4, -1)); ///// Answer = o Worl
// ---------------------------------------------------------

// Operators
var num1 = 10;
var num2 = 5;
var num3 = 3;
console.log(num1 + num2); ///// Answer = 15
console.log(num1 - num2); ///// Answer = 5
console.log(num1 * num2); ///// Answer = 50
console.log(num1 / num2); ///// Answer = 2
console.log(num1 % num2); ///// Answer = 0
console.log(num1 % num3); ///// Answer = 1
console.log(num1 ** num2); ///// Answer = 100000

// Pre Increment and Post Increment

var num1 = 5;
console.log(num1); ///// Answer = 5
console.log(++num1); // Hint : num1 = num+1 at this step itself ///// Answer = 6
console.log(num1); ///// Answer = 6
console.log(num1++); // Hint : num1 remains same at this step, after this step num1=num1+1 ///// Answer = 6
console.log(num1); ///// Answer = 7

var num = 10;
num = 10 - 9 - 8
console.log(num); ///// Answer = 10
console.log(--num); // Hint : num = num- 1 at this step itself ///// Answer = 9
console.log(num); ///// Answer = 9
console.log(num--); // Hint : num remains same at this step, after this step num=num - 1 ///// Answer = 9
console.log(num); ///// Answer = 8

/// Assignment Operators

var num1 = 10;
var num2 = 5;
num1 += num2;
console.log(num1); ///// Answer = 15
console.log(num2); ///// Answer = 5

var num1 = 10;
var num2 = 5;
num1 *= num2;
console.log(num1); ///// Answer = 50
console.log(num2); ///// Answer = 5

var num1 = 10;
var num2 = 2;
num2 **= num1;
console.log(num1); ///// Answer = 10
console.log(num2); ///// Answer = 1024

/// Comparison Operators

var a = 10;
var b = "1";
var c = "10";
console.log(a == b); ///// Answer = false
console.log(a == c); ///// Answer = true
console.log(a != b); ///// Answer = true
console.log(a != c); ///// Answer = false
console.log(b == c); ///// Answer = false
console.log(a === b); ///// Answer = false
console.log(a === c); ///// Answer = false
console.log(a !== b); ///// Answer = true
console.log(a !== c); ///// Answer = true