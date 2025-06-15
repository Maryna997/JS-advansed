let user: { name: string; age: number } = {
    name: "Tom",
    age: 30
};


let users: {
    name: string;
    age: number;
}[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];




type User = {
    name: string;
    age: number;
};

let users: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];



let arrAny: any[];
