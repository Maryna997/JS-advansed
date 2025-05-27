// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((users) => {
//             // Дані від бекенда
//             const markup = users.map((user) => {
//                 return `<li>
//                 <p><b>Name</b>: ${user.name}</p>
//                 <p><b>Email</b>: ${user.email}</p>
//                 <p><b>Company</b>: ${user.company.name}</p>
//                 </li>`;
//             })
//                 .join("");
            
//             userList.insertAdjacentHTML("beforeend", markup);
//         })
//         .catch((error) => console.log(error));
// });




const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}



// Символ ? вказує на початок параметрів запиту. Кожен параметр — це пара ім'я=значення.

// У рядку запиту параметри між собою розділяються символом &.

// У документації JSONPlaceholder API описано можливі параметри рядка запиту:

// _limit, який контролює кількість елементів у відповіді;
// _sort, який відповідає за порядок сортування об'єктів у масиві.

// * fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")
// GET-запит у прикладі вище поверне масив із семи користувачів (загалом їх 10), відсортованих за ім'ям (поле name) за алфавітним порядком. Підкреслення в іменах параметрів специфічні для цього бекенда, це не якийсь стандарт.



const searchParams = new URLSearchParams({
    _limit: 5,
    _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"