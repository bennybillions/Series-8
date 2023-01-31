import { Login, User } from './interface'

class Employee implements Login {
    id: number;

    name: string;

    address: string;

    constructor(id: number, name: string, address?: string){
this.id = id;
this.name = name;

    }
login(): User {
    return {name: 'Jp', age: 32, id: 123 }
}

    getAddress(): string{
        return `${this.name} ${this.address}`
    }
}
let emp = new Employee(1, 'Ilupeju');
 let am = emp.getAddress()

console.log(am);

class Manager extends Employee {
    constructor(id: number, name: string, address: string){
        super(id, name, address)
    }
}
  let mike = new Manager(233, 'Mike', 'ilupeju');
