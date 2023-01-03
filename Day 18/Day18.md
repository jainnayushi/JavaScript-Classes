# POST Method
```js
const URL = "https://jsonplaceholder.typicode.com/posts";
// copied from somewhere
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',},
    })

    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")}
    })
    .then(data =>{
        console.log(data);})
    .catch(error =>{
        console.log("inside catch");
        console.log(error);})

```
# PUT Method
```js
fetch(URL+"/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "fooSTORE",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
```
# DELETE Method
```js
fetch(URL + "/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
```
---
# Async - Await
* It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. 
* Function headed with async always give promise.
* await is used in place of then -> it waits until promise is resolved
* jo bhi promise return karega -> use await ahead of it
```js
// const getposts = async () => {}
async function getPosts(){
    const response = await fetch(URL);
    // if(!response.ok){
    //     throw new Error("Something went wrong")
    // }
    const data = await response.json();
    return data;}

getPosts()
    .then((myData) => {console.log(myData);}) // response in json
    .catch(error =>{console.log(error);})
```
---
# Modules
* index.html
```html
<script src="./app.js" type="module" > // defer ki jarurat nhi - it already sets
```
* info.js
```js
// 1 way to export
export default const fname = "john";

export class Person{
    constructor(fname, lname, age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;}
    info(){
        console.log(this.fname, this.lname, this.age)}
}
```
---
```js
// 2 way to export
export const age = 22;
const marks = 93;

// 3 way to export 
export {marks}
```
* app.js
```js
// 1 way to import
import fname, {Person} from "info.js"
// 2 way to import
import {age} from "age.js";
// 3 way to import
import {marks as score} from "age.js"; // aliasing

console.log(fname, age, score);
const person = new Person("john", "doe", 22)
person.info;
```
* age.js

---