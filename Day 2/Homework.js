/// String Operations
var a = "Hello World";
console.log(a[3]);
console.log(a[13]);
// Learn Slicing
console.log(a.slice(2, 8));
console.log(a.slice(0, 7));
// Learn Negative index in slicing
console.log(a.slice(-7, -1));
console.log(a.slice(0, -1));
// End is optional
console.log(a.slice(2));

// ---------------------------------------------------------

// Operators
var num1 = 10;
var num2 = 5;
var num3 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 % num3);
console.log(num1 ** num2);

// Pre Increment and Post Increment

var num1 = 5;
console.log(num1);
console.log(++num1); // Hint : num1 = num+1 at this step itself
console.log(num1);
console.log(num1++); // Hint : num1 remains same at this step, after this step num1=num1+1
console.log(num1);

var num = 10;
console.log(num);
console.log(--num); // Hint : num = num- 1 at this step itself
console.log(num);
console.log(num--); // Hint : num remains same at this step, after this step num=num - 1
console.log(num);

/// Assignment Operators

var num1 = 10;
var num2 = 5;
num1 += num2;
console.log(num1);
console.log(num2);

var num1 = 10;
var num2 = 5;
num1 *= num2;
console.log(num1);
console.log(num2);

var num1 = 10;
var num2 = 2;
num2 **= num1;
console.log(num1);
console.log(num2);

/// Comparison Operators

var a = 10;
var b = "1";
var c = "10";
console.log(a == b);
console.log(a == c);
console.log(a != b);
console.log(a != c);
console.log(b == c);
console.log(a === b);
console.log(a === c);
console.log(a !== b);
console.log(a !== c);
