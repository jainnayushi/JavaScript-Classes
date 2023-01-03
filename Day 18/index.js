const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then((response) => {
        return response.json();
    })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// POST

// fetch(URL, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
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
//     console.log("post");
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });

// PUT

// fetch(URL + "/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "foo-updated",
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
