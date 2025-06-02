// import axios from "axios";

// axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/users'
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err));



// import axios from "axios";
// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.log(error));


//? У методі then ти отримаєш наступні властивості в об'єкті відповіді.
// import axios from "axios";

// axios.get('https://jsonplaceholder.typicode.com/users')
// 	.then(response => {
// 		console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
// 	})
// 	.catch(error => {
// 		console.log(error);
//     })
//? На відміну від fetch, нам не потрібно парсити дані відповіді методом response.json(). Це робиться автоматично і додається до властивості data. Крім того, не потрібно перевіряти статус відповіді у властивості response.ok. Бібліотека Axios робить це автоматично і відхиляє проміс з помилкою для будь-якого невдалого HTTP-коду відповіді, включаючи 404.




// axios.get('https://jsonplaceholder.typicode.com/users')
// 	.then()
// 	.catch();

// axios.get('https://jsonplaceholder.typicode.com/posts')
// 	.then()
// 	.catch();

// axios.get('https://jsonplaceholder.typicode.com/images')
// 	.then()
// 	.catch();


// import axios from "axios";
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.get('/users')
//     .then()
//     .catch();

// axios.get('/posts')
//     .then()
//     .catch();

// axios.get('/images')
//     .then()
//     .catch();


// import axios from "axios";
// const myApiKey = "secret-api-key-for-every-request";
// axios.defaults.headers.common["header-name"] = myApiKey;
// ? Замість рядка "header-name" вказуємо потрібну назву заголовка у вигляді рядка. Після цього Axios автоматично додасть цей заголовок із вказаним значенням до кожного запиту.



// ? 1. Option
// axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");

// ? 2. Option
// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
// });
// axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);

// ? 3. Option
// axios.get("https://jsonplaceholder.typicode.com/users", {
//     params: {
//         _limit: 7,
//         _sort: "name"
//     }
// });

