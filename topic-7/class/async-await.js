// const fetchBooks = async () => {
//     try {
//         const response = await fetch('https://683c657a28a0b0f2fdc70986.mockapi.io/books');

//         if (!response.ok) {
//             throw new Error(response.status);
//         }

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// fetchBooks();




// const fetchBooks = async () => {
//     const response = await fetch('https://683c657a28a0b0f2fdc70986.mockapi.io/books');

//     if (!response.ok) {
//         throw new Error(response.status);
//     }

//     return response.json();
// };

// fetchBooks()
//     .then(data => {
//         console.log(data); 
//     })
//     .catch(err => {
//         console.log(err);  
//     });



// const fetchPosts = async () => { 
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     return response.json();
// };

// const foo = () => { 
//     fetchPosts()
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };

// foo();