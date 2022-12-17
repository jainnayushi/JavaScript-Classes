let fruits2 = [];
let fruits = ["apple", "mango", "grapes"];

let i = 0;
while (i < fruits.length + 1 ) {
  console.log(undefined); /// each element /// apple mango grapes undefined
  fruits2.push(fruits[i].toUpperCase());
  i++;
}
console.log(fruits2); /// ["APPLE", "MANGO", "GRAPES"]

// TypeError