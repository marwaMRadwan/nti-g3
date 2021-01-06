// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     getData(){
//         console.log(`my name is ${this.name} and i'm ${this.age} years old`)
//     }
// }

// let marwa = new Person("marwa", 36)  //marwa = {name:"marwa", age:36}
// console.log(marwa.name)
// let hossam = new Person('hossam',23) //hossam={name:"hossam", age:23}
// console.log(hossam)
// hossam.getData()

// user = {
//     name: 'marwa',
//     age:36,
//     getData(){
//         console.log(`${this.name}`)
//     }
// }
// user.getData()

class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getMainData(){
        return `my name is ${this.name} and i'm ${this.age} years `
    }
}
class Employee extends User{
    constructor(name, age, salary){
        super(name, age)
        this.salary=salary
    }
    getMainData(){
        return `my name is ${this.name} and i'm ${this.age} years ${this.salary}`
    }
}

function xyz(x){
    x.getMainData()
}

let u1 = new User('a',50)
u1.getMainData()
let emp1 = new Employee('a', 30, 1000)
console.log(emp1.getMainData())

xyz(u1)
xyz(emp1)

// x => y
// z => y
// f => a.y


