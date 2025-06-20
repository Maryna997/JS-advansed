// https://683c657a28a0b0f2fdc70986.mockapi.io/


// *  Read (GET)

// const getBooks = () => {
//     return fetch('https://683c657a28a0b0f2fdc70986.mockapi.io/books').then(
//         response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }

//             return response.json();
//         });
// };

// getBooks()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });



// const getBookById = bookId => {
//     return fetch(`https://683c657a28a0b0f2fdc70986.mockapi.io/books/${bookId}`).then(
//         response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }

//             return response.json();
//         });
// };


// getBookById(7)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });



// *   Create (POST)

// const addBook = bookInfo => {
//     const fetchOptions = {
//         method: 'POST',
//         body: JSON.stringify(bookInfo),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     return fetch('https://683c657a28a0b0f2fdc70986.mockapi.io/books', fetchOptions).then(
//         response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }

//             return response.json();
//         });
// };

// addBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// })
//   .then(book => {
//     console.log(book);
//   })
//   .catch(error => {
//     console.log(error);
//   });



// * Update (PUT/PATCH)

// const updateBookById = (bookInfoForUpdate, bookId) => {
//     const fetchOptions = {
//         method: 'PUT',
//         body: JSON.stringify(bookInfoForUpdate),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     return fetch(`https://683c657a28a0b0f2fdc70986.mockapi.io/books/${bookId}`, fetchOptions).then(
//         response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }

//             return response.json();
//         });
// };


// updateBookById({ title: 'Велика нова книга по NODEJS' }, 9)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 1 }, 12)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 4, author: 'Манго' }, 11)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// * Delete (DELETE)

// const deleteBookById = bookId => { 
//     return fetch(`https://683c657a28a0b0f2fdc70986.mockapi.io/books/${bookId}`, {method: 'DELETE'}).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status); 
//         }

//         return response.json();
//     });
// };

// deleteBookById(11)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// deleteBookById(12)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });