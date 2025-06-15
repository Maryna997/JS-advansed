// function greet(name?: string) {
//     if (name) {
//       return `Hello, ${name}!`;
//     } else {
//       return `Hello!`;
//     }
//   }
  
//   console.log(greet('Alice')); // Виводить: Hello, Alice!
//   console.log(greet()); // Виводить: Hello!
  
//   export {};



// type Person = {
//     name: string;
//     age?: number; // age є опціональною властивістю
// };
  
// const alice: Person = { name: 'Alice', age: 27 };
// const bob: Person = { name: 'Bob' }; // age не вказано, це припустимо

// export {};



// *            Різниця між Type та Interface

// Interface підтримує об'єднання через оголошення з тим самим ім'ям. Якщо ви визначите два interface з одним і тим же ім'ям, вони будуть "змерджені" в одне.

// interface Animal {
//     name: string;
// }
  
// interface Animal {
//     age: number;
// }
  
// let dog: Animal = {
//     name: 'Fido',
//     age: 5,
// };

// interface Dog extends Animal {
//     bark: string;
// }
  
// export {};




// type AnimalName = {
//     name: string;
// };
  
// type AnimalAge = {
//     age: number;
// };
  
// type Animal = AnimalName & AnimalAge;
  
// let dog: Animal = {
//     name: 'Fido',
//     age: 5,
// };
  
// export {};




// Ми також можемо міксувати Interface та type, але результат нам доведеться зберегти як тип.
// type Cat = {
//   meow: () => string;
// };

// interface Dog {
//   bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// export {};



// За допомогою ключового слова 'implements' ми встановлюємо обов'язкові властивості для класу. Якщо тепер у класі ми пропустимо будь-яку властивість, вказану в інтерфейсі, ми отримаємо помилку, як це сталося в класі OtherDog.

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   bark: string;
// }

// class MyDog implements Dog {
//   name = 'Fido';
//   bark = 'Woof!';
// }

// Error: Property 'name' is missing in type 'OtherDog'
// class OtherDog implements Dog {
//   bark = 'Woof!';
// }

// export {};



// interface Walkable {
//   walk(): void;
// }

// interface Eatable {
//   eat(): void;
// }

// class Animal implements Walkable, Eatable {
//   walk() {
//     console.log('The animal walks...');
//   }

//   eat() {
//     console.log('The animal eats...');
//   }
// }

// const animal = new Animal();

// export {};



// interface AddFunc {
//     (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//     return n1 + n2;
// }
