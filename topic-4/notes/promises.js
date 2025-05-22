// const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
// });
// resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
// reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.



// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         };
//     }, 2000);
// });

// console.log(promise);




//*  promise.then(onResolve, onReject)
// onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
// onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.



// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         };
//     }, 2000);
// });


// // Registering promise callbacks
// promise
//     .then(value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     })
//     .catch (error => {
//         console.log(error); // "Error! Error passed to reject function"
//     })
//     .finally(() => {
//         console.log("Promise settled"); // "Promise settled"
//     });


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000)
});

promise
    .then(value => {
        console.log(value); // 5
        return value * 2;
    })
    .then(value => {
        console.log(value); // 10
        return value * 3;
    })
    .then(value => {
        console.log(value); // 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });