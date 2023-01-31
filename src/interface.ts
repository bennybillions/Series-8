export interface User {
    name: string;
    age: number;
    id: number;
    email?: string;
}
let user: User = {name: 'Jp', age: 32, id: 123 }

interface Employees extends User{
    salary: number;
}

let emplyee: Employees = {name: 'Noel', age: 23, id: 24, salary: 500}

export interface Login {
    login(): User;
}

let [user1, user2] : User[] = [
    {name: 'Jp1', age: 32, id: 123 },
    {name: 'Jp2', age: 33, id: 123 },
    {name: 'Jp3', age: 34, id: 123 }
]
console.log(user1, user2);