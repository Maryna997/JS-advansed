console.log("First log");
setTimeout(() => {
    // Виконується третьою, через 2000 мілісекунд (2 секунди)
    console.log("Second log");
}, 2000);
console.log("Third log");

// First log
// Third log
// Second log


const timerID = setTimeout(callback, delay, arg1, arg2, ...);



const greet = () => {
    console.log("Hello");
};
const timerID = setTimeout(greet, 3000);
clearTimeout(timerID); 




const intervalId = setInterval(callback, delay, arg1, arg2, ...)
// На відміну від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу.


const greet = () => {
    console.log("Hello");
};
const intervalIdd = setInterval(greet, 3000);
clearInterval(intervalIdd); 