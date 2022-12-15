console.log(0 && 1 && "hey");
console.log("hey" && 1 && "hkhk");
console.log("hey" && 1);
console.log("hey" || 1);
console.log("" && 1);
console.log("" || 1);

console.log(+"1"); //1
let p = +"hey";
console.log(typeof p); // number
console.log(+"hey"); // NaN
console.log(+"18"); // 18

let x = 77;
let y = 9;
console.log(x < 10 && y == "ayushi");
console.log(x > 7 && y < 1);
console.log(x > 7 && y > 1);
console.log(0 && 1 && "foo");
console.log(x == 5);
console.log(x > 5 || y != 9);
console.log(!(x >= 77));
console.log(!(x !== y));

console.log(+("1" + 2));// 12
console.log(1 + 2 + 3);             

console.log("--------");
console.log(console.log("oo") && console.log("foo") && "jj"); // oo undefined
console.log("1"); // 1
console.log("oo" && "jj"); // jj
console.log(undefined); // undefined
console.log("1"); // 1
console.log("oo" && console.log("jj")); //jj undefined

// Write a program to check whether a number is negative, positive or zero.
// Write a program to check whether a number is even or odd.
// Write a program to check whether a year is leap year or not.
// Write a program to take month number and print number of days in that month. 
