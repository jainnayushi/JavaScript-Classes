---
marp: true
theme: default
paginate: true
---
# String Operations
### String Indexing
string[index]
* Positive Indexing
H e l l o _ W o r l d
0 1 2 3 4 5 6 7 8 9 10


### String Slicing
string.slice(start, end)
Note :  Start is inclusive, end is exclusive - [start, end)
Note : start is required and end is optional - Default end is last element/last index + 1
* Negative Indexing use in slicing
 H   e   l  l  o  _  W  o  r  l  d
-11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 
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
--- 
# Arithmetic Operators
<img width="368" alt="image" src="https://user-images.githubusercontent.com/64698800/207355812-67231b1c-e455-4347-8f9e-5392f64d6605.png">

# Assignment Operators
<img width="491" alt="image" src="https://user-images.githubusercontent.com/64698800/207355875-2bde7f32-bf48-41eb-ad06-70990fa82b65.png">

# Comparison Operators
<img width="373" alt="image" src="https://user-images.githubusercontent.com/64698800/207356005-10771bea-15a1-453f-99b0-5e4ae2ad39ad.png">

# Logical Operators
<img width="209" alt="image" src="https://user-images.githubusercontent.com/64698800/207356077-79490086-b7bc-4871-94f5-33df5020e0a6.png">

# Conditional or Ternary Operator
<img width="380" alt="image" src="https://user-images.githubusercontent.com/64698800/207356379-3430f09b-c875-49a0-a4ee-325cccc28cf0.png">
---
