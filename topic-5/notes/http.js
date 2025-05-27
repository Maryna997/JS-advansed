// fetch(URL, options)

const { useSyncExternalStore } = require("react");

const options = {
    method: "GET"
}

fetch("https://jsonplaceholder.typicode.com/users", options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        // Data handling
        console.log(data);
    })
    .catch(error => {
        // Error handling
        console.log(error);
    })


// fetch("some-url", {
//     headers: {
//         "Content-Type": "application/json",
//         "X-Custom-Header": "custom value",
//     }
// })


// Наприклад, якщо ми хочемо явно вказати, що у відповіді від бекенда ми очікуємо тільки JSON, то для цього додаємо заголовок Accept зі значенням application/json.
// fetch("<https://jsonplaceholder.typicode.com/users>", {
//     headers: {
//         Accept: "application/json",
//     },
// }).then(response => {
//     // ...
// });


// Наприклад, якщо ми робимо fetch-запит із вебсторінки https://my-site.com/about на https://my-api.com/users, то заголовки будуть наступними:
// GET / users
// Host: my-api.com
// Origin: <https://my-site.com>

// Сервер перевіряє заголовок Origin і, якщо він підтримує кросдоменні запити, додає у відповідь спеціальний HTTP-заголовок Access-Control-Allow-Origin.
// # Private API
// Access-Control-Allow-Origin: <https://my-site.com>

// # Public API
// Access-Control-Allow-Origin: *
