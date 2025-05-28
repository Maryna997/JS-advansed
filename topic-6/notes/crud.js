// *                 Отримання одного елемента

// Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then((posts) => console.log(posts))
//     .catch((error) => console.log(error));



// *                         Створення
// const postToAdd = {
//     title: "CRUD",
//     body: "CRUD is awesome!",
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8"
//     },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//     .catch(error => console.log(error));
  



// *                          Оновлення
// метод PATCH замінює в наявному ресурсі значення, які були передані в тілі запиту. Значення ресурсу, які не передавались, лишаться без змін;
// метод PUT повністю замінює ресурс. Значення ресурсу, які не передавались, видаляються з ресурсу.

// Change value of id property to update different post
// const postToUpdate = {
//     id: 1,
//     title: "CRUD",
//     body: "CRUD is really awesome!",
// };

// const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//         "Content-Type":"application/json; charset=UTF-8"
//     },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//     .catch(error => console.log("ERROR:", error));
  


// *                         Видалення

const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
    method: "DELETE",
})
.then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((deletedPost) => console.log(deletedPost))
  .catch(error => console.log("Error:", error));