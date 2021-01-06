// /* Objects */
// let book = {
//     title: 'Book 1',
//     author: 'Author 1',
//     pages: 500
// }

// let getBookSummary = function(obj){
//     //return `Book Name is ${obj.title} and its author is ${obj.author}`
//     return {
//         summary: `Book Name is ${obj.title} and its author is ${obj.author}`,
//         pageCount: obj.pages
//     }
// }
// console.log(getBookSummary(book));

// // req(f) => c k f
// let fConverter = function(f){
//     return {
//         c : ( f - 32 )* ( 5 / 9 ),
//         k : ( f + 460 ) * ( 5 / 9 ),
//         f : f
//     }
// }
// let temp = fConverter(100)
// console.log(temp);
// x = 5
// let add =function(x,a){
//     x+=a  //x = 8
// }
// add(x, 3)
// console.log(x); //5
// let customer = {
//     balance: 1000,
//     name:"ahmed"
// }

// let addBalance = function(c, amount){
//     c.balance+=amount
// }
// addBalance(customer, 500)
// console.log(customer);
// account => income, taxes     - addIncome => amount +income , taxes+amount*10%
// account = {
//     income: 0,
//     taxes: 0
// }
// let addIncome = function(acc, amount){
//     acc.income += amount 
//     acc.taxes += amount*10/100
// }
// addIncome(account, 1000)
// addIncome(account, 1000)

// console.log(account);




// let user = {
//     name: "marwa",
//     job: "lel asf developer",
//     yearOfBirth: 1985,
//     getAge: function(year){
//         return year - this.yearOfBirth
//     }
// }
// console.log(user.getAge(2001))

// //arrow function
// const square = (num) => num*num  // function square(num) === let square = function(num){ }
// const square1 = (num) =>{ 
//     return num*num
// }

// const users = [
//     {name: "ahmed", age: 25},
//     {name: "nour", age: 26},
//     {name: "omar", age:6}
// ]
// const data = users.filter( user => user.age<=25 )
// console.log(data)

// const add = (...args) =>{
//     //return arguments[0]+arguments[1]
//     return(args)
// }
// console.log(add(5,10,11))

// const add1 = function(){
//     return arguments[0]+arguments[1]
// }
// console.log(add1(7,15))

// let user = {
//     name:"a",
//     getData(){
//         console.log(this.name)
//     }
// }
// user.getData()

// resturant ={
//     name: "el hadra",
//     numOfChairs: 100,
//     getAvailblity(num){
//         // return (num>this.numOfChairs? "not available": "available")
//         if(num>this.numOfChairs) return "not available"
//         console.log('hello')
//         return "available"
//     }
// }
// console.log(resturant.getAvailblity(200));

// x=0
// if(x) console.log('hello')











