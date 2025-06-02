// * Синтаксис async

// async function fetchData() {
//     // ...
// }

// const fetchData = async function () {
//     // ...
// }

// const fetchData = async () => {
//     // ...
// }

// const user = {
//     async getUsername() {
//         // ...
//     },
// };

// class User {
//     async getUserName() {
//         // ...
//     }
// }



// const foo = async () => {
//     return 5;
// };

// foo().then(value => {
//     console.log(value);  // 5
// })


// const foo = async () => {
//     // Не вказуємо значення для повернення
// };

// foo().then(value => {
//     console.log(value);  // undefined
// })



// * Оператор await

// const foo = async () => {
//     console.log("Before await");

//     const promiseValue = await new Promise(resolve => {
//         setTimeout(() => resolve(5), 2000);
//     });

//     console.log("After await", promiseValue);
// };

// foo();// через 2 секунди виведеться в консоль  "After await" 5
// ?У змінній promiseValue зберігається не сам проміс, а результат його виконання — у прикладі це число 5. Це тому, що інтерпретатор призупиняє функцію foo, коли зустрічає оператор await, і чекає, доки відповідний проміс завершить виконання, а потім, коли результат доступний, він продовжує виконання функції, записуючи результат у змінну.



// * HTTP-запити

// const fetchUsers = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(response => {
//             console.log(response.data);
//         });
// };


// const fetchUsers = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(response.data);
// };



// ? Якщо результат HTTP-запиту потрібно використовувати в зовнішньому коді, просто поверни його значення з асинхронної функції та оброби його в методі then.

// const fetchUsers = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     return response.data;
// };

// fetchUsers()
//     .then(users => console.log(users));




// * Конструкція try…catch
// console.log("Before try...catch");

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }

// console.log("After try...catch");


//? Якщо результат асинхронної функції (проміс) не використовується в зовнішньому коді, помилки оброблюються у самому тілі функції за допомогою конструкції try...catch. Значення параметра error у блоці catch — це помилка, яку генерує await, якщо проміс був відхилений. 

// const fetchUsers = async () => { 
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// };



//? Якщо результат асинхронної функції (проміс) використовується в зовнішньому коді, тобто за межами інших асинхронних функцій, помилки оброблюються методом catch() колбеку. Значення параметра error у методі catch() — це помилка, яку генерує await, якщо проміс буде відхилений.

// const fetchUsers = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//     return response.data;
// };

// fetchUsers()
//     .then(users => console.log(users))
//     .catch(error => console.log(error)); 


//? Якщо результат асинхронної функції використовується в іншій асинхронній функції, помилки оброблюються конструкцією try...catch. Значення параметра error у блоці catch представляє помилку, яку генерує await, якщо проміс буде відхилений.

// const fetchUsers = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//     return response.data;
// };

// const doStuff = async () => { 
//     try {
//         const users = await fetchUsers();
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// };

// doStuff();