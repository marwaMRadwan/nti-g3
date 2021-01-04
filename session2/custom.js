// let welcome = function(){
//     console.log('ay 7aga');
// }

// let square = function(x){
//     console.log(x*x);
// }
//x(a=0,b=0,c=0,d=0,e=0)   x(undefined,1,und..,und...,2)
// let addStudent = function(name="anyname", gYear){
//     console.log(name);
// }
// addStudent(undefined, 60)

// console.log(add(2,3));
// welcome()


// function add(a,b,c=0){
//     return a+b+c
// }

// square(3)

// grade = "50"
// total = 200

// const gradeCalculator = function(grade, total){
//     //console.log(typeof grade);
//     if(typeof grade != 'number' || typeof total != 'number'){
//         throw new Error('numbers needed')
//     }
//     let percent = grade/total *100
//     if(percent>=90 ) result = "A"
//     else if(percent>=80 ) result = "B"
//     else if(percent>=70 ) result = "C"
//     else if(percent>=60 ) result = "D"
//     else result = "F"
//     console.log(result)
// }
// try{
//     gradeCalculator(grade, total)
// }
// catch(e){
//     console.log(e.message)
// }

// let user = {
//     name: "marwa",
//     age: 36,
//     email: "marwa@techsexperts.com",
//     address: "hadyk el ahram",
//     office: "nasr city"
// }


// console.log(Object.values(user));

users = []

addUserForm = document.querySelector('#addUser')
addUserForm.addEventListener('submit', function(e){
    e.preventDefault()
  //  console.log(e.target.elements)
     user = {
     name: e.target.elements.name.value,
     age: e.target.elements.age.value,
     email: e.target.elements.email.value,
     address: e.target.elements.address.value,
     office: e.target.elements.office.value
    }
    users.push(user)
    addUserForm.reset()
    console.log(users)
})
//console.log(user)













