# Document Object Model DOM
* Browser creates an object of the entire file (web page) called document.
* Document - Object which is in window global object - has info in key:value pair

```js
console.log(window.document) 
// or
console.log(document) ///!DOCTYPE <html>....</html>
console.dir(document) /// #document{....}
```
---
# 1. Selecting Elements
# getElementById 
- `document.getElementById("id")`
- only 1 element can have one id
```html
<h1 id="main"> Manage your tasks </h1>
```
```js
console.log(document.getElementById("main"));
/// <h1 id="main"> Manage your tasks </h1>
console.dir(document.getElementById("main"));
/// {.....} // returns object - html element in the form of object
console.log(typeof document.getElementById("main")); /// Object
```
---
# querySelector
* `document.querySelector("#id")` or `document.querySelector(".class")` or `document.querySelector(" div p.class")`
* accessed by . and #
* In case of multiple classes -> it gives first element
```html
<h1 id="main"> Manage your tasks </h1>
<div>
    <p class="header"> This is para </p>
    <h2 class="header"> This is heading </h2></div>
```
* can access id, class, element
```js
console.log(document.querySelector("#main")); //id
console.log(document.querySelector(".header")); //class
console.log(document.querySelector(" div p.header")); //element
```
---
# querySelectorAll
* `document.querySelectorAll(".class")`
* In case of multiple classes -> it gives all elements
```js
console.log(document.querySelectorAll(".header")); 
```
---
# textContent
* `document.getElementById("id").textContent`
* can change text
* can show hidden content too
```html
<h1 id="main"> Manage your tasks<span style="display: none"> Hello </span> </h1>
```
```js
const mainHeading = document.getElementById("main");

console.log(mainHeading.textContent); /// Manage your tasks Hello
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent); /// This is something else
```
---
# innerText
* `document.getElementById("id").innerText`
* can change text 
* Hidden part nhi dikhayega - shows only what is visible
* Same as textContent except for hidden part thing
```html
<h1 id="main"> Manage your tasks<span style="display: none"> Hello </span> </h1>
```
```js
const mainHeading = document.getElementById("main");
console.log(mainHeading.innerText); /// Manage your tasks // Hello nhi dikhaya
```
---
# innerHTML
* `document.querySelector(".class").innerHTML`
* Anything inside a tag is innerHTML
```html
 <div class="headline">
    <h2 id="main-heading">Manage your tasks <span style="display: none">Hello</span></h2>
    <button class="btn btn-headline"> Welcome</button>
</div>
```
```js
const headline = document.querySelector(".headline");
console.log(headline.innerHTML); /// <h2>..</h2> <button>...</button>
headline.innerHTML = "<h1>Inner html changed </h1>";
headline.innerHTML += "<button class= \"btn\"> Learn More </button>"  // " -> \"
console.log(headline.innerHTML); 
/// <h1>Inner html changed </h1> <button class= "btn"> Learn More </button>
```
---
# 2. Changing styles of Elements 
* `document.querySelector("div.headline h2").style.csspropety`
* `use camelcase for style name`
```html
<div class="headline">
    <h2 style="background-color:white" >Hello</h2>
</div>
```
```js
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style); /// {...}
mainHeading.style.backgroundColor = "blue"; //background-color nhi -> use camelcase
mainHeading.style.border = "20px solid green";
```
---
# 3. Get and Set Attributes
```html
<li><a href="#home">Home</a></li>
```
# getAttribute
* `document.querySelector("tag").getAttribute("attribute")`
```js
const link = document.querySelector("a"); 
console.log(link.getAttribute("href")); /// #Home //link.getAttribute("href").slice(1) -> home
```
# setAttribute
* `document.querySelector("tag").setAttribute("attribute", "new value")`
```js
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href")); /// https://codprog.com
```
---

# 4. Get multiple elements
# getElementsByClassName
* `document.getElementsByClassName("class")`
* Gives `HTML Collection` - array like object - indexing,length are there. But map-reduce etc. nhi use kar sakte
* We `can't use forEach` method to iterate through HTMLCollection
* We can use "for of and simple for loop" to iterate through HTMLCollection
```js
const navItems = document.getElementsByClassName("nav-item"); 
console.log(navItems); ///HTMLCollection(3)[li , li, li]
console.log(navItems[2]); /// li // third nav item
```
---
# getElementsByTagName
* `document.getElementsByTagName("")`
* Gives `HTML Collection` - array -indexing,length
* We `can't use forEach` method to iterate through HTMLCollection
* We can use "for of and simple for loop" to iterate through HTMLCollection

```js
const navItems = document.getElementsByTagName("nav-item"); 
console.log(navItems); ///HTMLCollection(3)[li , li, li]
console.log(navItems[2]); /// li
```
---
# Simple, for of loop in getElementsByClassName &  getElementsByTagName
```js
const navItems = document.getElementsByTagName("nav-item"); 

for(let i=0; i< navItems.length; i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";

}

for(let navItem of navItems){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}
```
---
# Convert HTML Collections into array 
* Use Array.from(document.getElementsByTagName("tag"))
```js
navItems = Array.from(navItems);
console.log(Array.isArray(navItems)); /// True
```
* Now forEach method can be used
```js
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})
```
---

# querySelectorAll
* `document.querySelectorAll(".class")`
* Gives `Node List` 
* Loops used - simple loop, for of, forEach
```js
 const navItems = document.querySelectorAll(".nav-item"); // NodeList(3)[li , li, li]
console.log(navItems[2]); /// li
console.log(Array.isArray(navItems)); /// False
```
* `Can change Node List into Array`
```js
let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems)); /// True
```
---
doc - html - head
            - 
# 5. DOM Tree
```html
<html>
    <head>
        <title>Dom Traversing</title>
        <script src="./1.js" defer></script>
    </head>
    <body>
        <div class="container"> </div>
    </body>
</html>
```
1. Document - Root Node - JS Object
2. HTML - Root Element - Child node of document
3. Head - Child node of HTML
    1. /n--- - Text node
    2. Title -> Dom Traversing
    3. /n--- - Text node
    4. Script
    5. /n--- - Text node
4. /n--- - Text node
5. Body - Child node of HTML 
* New line+space (/n---) - act as Text Node
* After HTML - By default Head and Body comes - therefore /n--- is not considered here 
* We can traverse from one node to another

# Get Root Node
`document.getRootNode()`
```js
const rootNode = document.getRootNode();
console.log(rootNode) /// #document
```
---
# Get Child of Root Node
`.childNodes`
```js
const rootNode = document.getRootNode();
console.log(rootNode.childNodes) /// NodeList [html] // 1 child
```
# Get HTML Node
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode) /// <html>....</html>
```
---
# Get child of HTML
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); ///NodeList(3) [head, text, body]

// Get Head, Text, Body
const headElementNode = htmlElementNode.childNodes[0]; /// 
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
```
# Get Parent of Head node
`.parentNodes`
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0]; 
console.log(headElementNode.parentNode) /// <html>...</html>
```
---
# Get next sibling of Head node
`.nextSibling`
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0]; 
console.log(headElementNode.nextSibling) /// text

console.log(headElementNode.nextSibling.nextSibling) /// <body>...</body>
```
# Get next sibling of Head node `ignoring text node`
`.nextElementSibling`
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0]; 
console.log(headElementNode.nextElementSibling) /// <body>...</body>
```
---
# Get Text content of next sibling of Head node
`.textContent`
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0]; 
console.log(headElementNode.nextSibling.textContent) /// ______ => /n_ _ _
```

# Why are empty spaces element not shown in webpage
* Bcoz browser by default sets `while-space:normal`
* If we do `while-space:pre` spaces will start showing
```html
* { white-space : normal; }
```
---
# Check childs of Head node
```js
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0]; 
console.log(headElementNode.childNodes); 
/// NodeList(5) [text, title, text, script, text]
```
# Task
* Go to heading h1 -> Go to its parent -> change bg and color of its parent
```html
<body>
    <div class="container">
        <h1>My Heading</h1>
        <p> Some useful info</p>
    </div>
</body>
```
---
```
const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333"
```
* Reach one node from another :- 
# Reach body from h1
```js
const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
```
# Reach body from document
```js
const body = document.body
```
---
# Reach title from head
`Can do querySelector inside Head` -> searches everything inside head
```js
const head = document.querySelector("head");
const title = head.querySelector("title");
```
# Get child ignoring text nodes
`childNodes V/S children`
`.children`
```js
const container = document.querySelector(".container");
console.log(container); /// <div class="container">...</div>

console.log(container.children); /// HTMLCollection(2) [h1, p]

console.log(container.childNodes); /// NodeList(5) [text, h1, text, p, text]
```
---
```html
<section class="section-todo container">
    <h2>Your plan for today ?</h2>
    <!-- todo form  -->
    <form class="form-todo">
        <input type="text" name="" id="" placeholder="Add Todo" />
        <input type="submit" value="Add Todo" class="btn" />
    </form>
</section>
```
> # Play with class :- 
# Get classes in any tag
`.classList`
```js
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); 
/// DOMTokenList(2) ["section-todo", "container", value : "section-todo container"]
```
---
# Add Class through JavaScript
`.classList.add('class')`
```js
const sectionTodo = document.querySelector(".section-todo");
sectionTodo.classList.add('bg-dark');
```
# Remove Class through JavaScript
`.classList.remove('class')`
```js
const sectionTodo = document.querySelector(".section-todo");
sectionTodo.classList.remove('bg-dark');
```
---
# Check if Class Exists! through JavaScript
`.classList.contains('class')`
```js
const sectionTodo = document.querySelector(".section-todo");
sectionTodo.classList.contains('bg-dark'); /// True
```
# Remove if Class already Exists! or Add if doesn't!
`.classList.toggle('class')`
```js
const sectionTodo = document.querySelector(".section-todo");
sectionTodo.classList.toggle('bg-dark'); // adds if doesn't exist, else remove
```
---
```html
<ul class="todo-list">
    <li class="first-todo">Todo 1</li>
</ul>
```
---