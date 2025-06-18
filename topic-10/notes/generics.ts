// let arr: Array<string | number> = [];


// function identity<T>(arg: T): T {
//         return arg;
//     }
    
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);
    


// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
  
// const merged = merge({ name: 'Alisa' }, { age: 28 });

// merged.name;

// export {};



// type Person = {
//     name: string;
//   };
  
//   type AdditionFields = {
//     age: number;
//   };
  
//   function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
//   }
  
//   const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });
  
//   merged.name;
  
//   export {};



// type Person = {
//         name: string;
//         age: number;
//         location: string;
// };
    
// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'



// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//     return obj[key];
// }
  
// extractValue({ name: 'John' }, 'name');

// export {};




// class DataStorage<T> {
//     private data: T[] = [];
  
//     addItem(item: T) {
//       this.data.push(item);
//     }
  
//     getItems() {
//       return [...this.data];
//     }
//   }
  
//   const textStorage = new DataStorage<string>();
//   textStorage.addItem('Hello');
//   textStorage.addItem('World');
//   console.log(textStorage.getItems()); // ['Hello', 'World']
//   textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
  
//   const numberStorage = new DataStorage<number>();
//   numberStorage.addItem(1);
//   numberStorage.addItem(2);
//   console.log(numberStorage.getItems()); // [1, 2]
//   numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'
  
//   export {};
  




// class KeyValuePair<TKey, TValue> {
//     constructor(private key: TKey, private value: TValue) {}
  
//     getKey(): TKey {
//       return this.key;
//     }
  
//     getValue(): TValue {
//       return this.value;
//     }
//   }
  
//   const pair1 = new KeyValuePair('name', 'Alice');
//   console.log(pair1.getKey()); // 'name'
//   console.log(pair1.getValue()); // 'Alice'
  
//   const pair2 = new KeyValuePair(1, true);
//   console.log(pair2.getKey()); // 1
//   console.log(pair2.getValue()); // true
  
//   export {};