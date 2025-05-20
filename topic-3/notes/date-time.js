const date = new Date();
console.log(date); // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


const date = new Date("2030-03-16");
console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

const date = new Date("2030-03-16T14:25:00");
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"



console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"


console.log(new Date(2030, 2, 16, 14, 25, 0, 0));// "Sat Mar 16 2030 14:25:00 GMT+0200 "




console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
// Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула з 01.01.1970.



// Вбудований метод getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року.
const date = new Date();
console.log(date.getTime()); // 1624021654154



console.log = Date.now();  // 1693237207904



const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
for (let index = 0; index <= 100; index++) {
    console.log(index);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);