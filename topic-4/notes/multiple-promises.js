// *Метод Promise.all()
// Promise.all([promise1, promise2, promise3, ...])
// Метод Promise.all() дозволяє одночасно обробити кілька промісів та отримати їхні результати. Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//     .then(values => console.log(values))
//     .catch(error => console.log(error)); // [1, 2, 3]



// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error)); // "Rejected promise 2"



// * Метод Promise.allSettled()
// Promise.allSettled([promise1, promise2, promise3, ...])

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
// 	.then(values => console.log(values));
// 	// [
// 	//   { status: "fulfilled", value: 1},
//   //   { status: "rejected", value: "Rejected promise 2"},
//   //   { status: "fulfilled", value: 3}
//   // ]



// * Метод Promise.race()
// Promise.race([promise1, promise2, promise3, ...])

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
//     .then(value => console.log(value)) // 1
//     .catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 1000);
  });
  
  Promise.race([p1, p2])
      .then(value => console.log(value))
      .catch(error => console.log(error)); // 2
  