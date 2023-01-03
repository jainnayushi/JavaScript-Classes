// const URL = "https://jsonplaceholder.typicode.com/postssss";

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const URL = "https://jsonplaceholder.typicode.com/posts";

// const a = fetch(URL);
// console.log(a);

// fetch(URL).then((response) => {
//   console.log(response);
// });

// fetch(URL).then((response) => {
//   console.log(response.json());
// });

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch(URL + "/ 1")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// POST

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
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
    console.log("post");
    console.log("data", data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });

// // PUT

// fetch(URL+"/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "fooSTORE",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });

// DELETE

// fetch(URL + "/1", {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });
