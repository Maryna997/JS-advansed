// *                         1

// let user: { name: string; age: number } = {
//     name: "Tom",
//     age: 30
// };


// let users: {
//     name: string;
//     age: number;
// }[] = [
//     { name: 'Tom', age: 30 },
//     { name: 'Jack', age: 25 },
//     { name: 'Alice', age: 32 },
// ];




// type User = {
//     name: string;
//     age: number;
// };

// let users: User[] = [
//     { name: 'Tom', age: 30 },
//     { name: 'Jack', age: 25 },
//     { name: 'Alice', age: 32 },
// ];


// let arrAny: any[];



// *                        2

// let tupleType: [string, boolean];
// let date: [number, number, number];
// date = [7, 11, 2023]; // OK


// let tuple: [string, ...number[]];
// tuple = ['hello', 42, 100, 200]; // OK


// enum Role {
//     ADMIN,
//     USER,
//  }
  
//  const person = {
//     role: Role.ADMIN,
//   };
  
//  if (person.role === Role.ADMIN) {
//     console.log('Role: ', Role.ADMIN);
//   }
  
//  export = {};


// enum Role {
//     ADMIN,
//     USER,
// }
    
// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"

    
// enum UserStatus {
//     Active = 'ACTIVE',
//     Inactive = 'INACTIVE',
//     Banned = 'BANNED',
//     }
// let status: UserStatus = UserStatus.Active;
    

// enum HttpCodes {
//     OK = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
// }
  
// function respond(status: HttpCodes) {
//     // handle response
// }
  
// respond(HttpCodes.OK);
  
// export {};


// Існує ще така конструкція, як const enum. На відміну від звичайного enum, const enum видаляється під час транспіляції та не створює додаткового об'єкта в JavaScript.
// Значення const enum вставляють у місце використання у вигляді літералів. Це може допомогти покращити продуктивність.


// const enum HttpCodes {
//     OK = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
// }
    
// const status = HttpCodes.OK;
    
// Після компіляції у JavaScript отримаємо наступний код:
// const status = 200;


// Як видно з прикладу, const enum видаляється зі скомпільованого коду і його значення прямо вставляється в код. У цьому випадку HttpCodes.OK замінився на 200. Це і є ключовою відмінністю const enum від звичайного enum.

// Однак існує одне обмеження використання const enum: їх не можна використовувати у виразах, які вимагають виконання під час виконання.



// let mixedType: string | number | boolean;


// type Dog = {
//     legs: 4;
//     bark: () => void;
// }
    
// type Fish = {
//     fins: 2;
//     swim: () => void;
// }
    
// let pet: Dog | Fish;
    


// type Employee = {
//     name: string;
//     id: number;
//   };
  
//   type Manager = {
//     employees: Employee[];
//   };
  
//   type CEO = Employee & Manager;
  
//   const ceo: CEO = {
//     name: 'Alice',
//     id: 1,
//     employees: [
//       {
//         name: 'Bob',
//         id: 2,
//       },
//     ],
//   };
  
//   export {};

// У цьому прикладі CEO є intersection тип Employee і Manager. Це означає, що об'єкт типу CEO повинен містити всі властивості, визначені в Employee та Manager.


// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1; // OK
// value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

// type YesOrNo = 'yes' | 'no';
// let answer: YesOrNo;
// answer = 'yes'; // OK
// answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

// export {};



// type ButtonSize = 'small' | 'medium' | 'large';

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case 'small':
//       return { fontSize: '10px', padding: '5px' };
//     case 'medium':
//       return { fontSize: '14px', padding: '10px' };
//     case 'large':
//       return { fontSize: '18px', padding: '15px' };
//     default:
//       return { fontSize: '14px', padding: '10px' };
//   }
// }

// let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

// export {};