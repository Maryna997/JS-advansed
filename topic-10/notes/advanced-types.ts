type User = {
    id: string;
    name: string;
    email: string;
  };
  
  type Users = {
    [id: string]: User;
  };
  
  let users: Users = {};
  
  let user: User = {
    id: '1',
    name: 'Alex',
    email: 'alex@example.com',
  };
  
  users[user.id] = user;
  
  export {};
  