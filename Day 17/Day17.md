# AJAX

* AJAX : Asynchronous Javascript and XML.
* Used for `HTTP request`(API request)- communication between Client and Server.
* AJAX is a set of "web development techniques" using many web technologies on the "client-side" to create `asynchronous web applications`. 
* With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page.
* Browser does this for us!
* We don't use data in XML format anymore, we use JSON now. 
* We have 3 most common ways to create and send request to server
1. xmlHTTPRequest (old way of doing)
2. fetch API (new way of doing)
3. axios (this is third party library)
---
* Imp `methods of xhr object` - onload, onerror, onreadystatechange (on state change of the HTTP request), status, readyState, response
* `HTTP Methods` - GET(read data), POST(create data), PUT(change data/override), PATCH(change small data), DELETE(delete data)
* Inspect -> Network -> ALL -> Requests -> Header(Request url, Request method, Status code, Response headers, Request headers) - Response(array of objects - JSON
* JSON - JavaScript Object Notation - `All keys should be in ""` - `keys can be string, array, object, null, integer` - `can't be method`.
* `xhr Ready State` - 0 (Unsent), 1 (Opened), 2 (Headers received), 3 (Loading), 4 (Done). `We get response at State 4`
* `Status Code` - 1xx (Informational response), 2xx (Successful), 3xx (Redirection), 4xx (Client Error), 5xx (Server Error)
---
# Fetch API 
* It takes URL, it returns promise which resolves to give response -> response has json() function -> which also gives promise -> this resolves to give final json response.
* It only `rejects when there is network failure only`
* When to run catch -> check if response.ok = false -> throw error -> catch will work
---
# GET Method
```js
const URL = "https://jsonplaceholder.typicode.com/posts"; 

fetch(URL)
    .then(response =>{  
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })
```
