// Метод JSON.stringify(value) приймає значення і перетворює його у JSON. 

const dog = {
    name: "Mango",
    age: 3,
    isGoodBoy: true,
    bark() {
      console.log("Woof!");
    },
  };
  
const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
  
  
const json = JSON.stringify(() => console.log("Well, this is awkward")); 
console.log(json); // undefined




// Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані. 
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null



const json = '{"name":"Mango","age":3,"isGoodBoy":true}'; 

const dog = JSON.parse(json); 
console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true} console.log(dog.name); // "Mango"



const data = JSON.parse("Well, this is awkward"); 
console.log("❌ You won't see this log");


const data = JSON.parse('{username: "Mango"}'); // Error. У прикладі у властивості username бракує подвійних лапок.
console.log("❌ You won't see this log");



try {
    // Code that may throw a runtime error
  } catch (error) {
    // Error handling
  }


try {
    const data = JSON.parse("Well, this is awkward");
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }
  
console.log("✅ This is fine, we handled parsing error in try...catch");
  