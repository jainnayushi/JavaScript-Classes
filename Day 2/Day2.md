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
# Operators

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