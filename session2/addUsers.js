userKeys = ['name','age','email','address','office']
users = [
    {name: "a", age: "b", email: "c", address: "d", office: "e"},
    {name: "q", age: "w", email: "e", address: "r", office: "t"}
]
addUserForm = document.querySelector('#addUser')
document.querySelector('#showHide').addEventListener('click', function(e){
    this.textContent == "show"? this.textContent="hide":this.textContent="show";
    document.querySelector('#formSection').classList.toggle('d-none')
})
addUserForm.addEventListener('submit', function(e){
    e.preventDefault()
    let data = this.elements  //this = e.target = addUserForm
    let user ={}
    userKeys.forEach( key => { user[key] = data[key].value })
    users.push(user)
    addUserForm.reset()
    console.log(users)
})

    //user.name = data.name.value  => user["name"] = data["name"].value
    // for(i=0; i<userKeys.length; i++){
    //     user[userKeys[i]] = data[userKeys[i]].value  // user['name'] = data['name].value
    // }
 
    // userKeys.forEach((key,index)=>{
    //     user[key]=data[key].value
    // })
    // console.log(user)
    // user["name"] = data.name.value
    // user["age"] = data.age.value
    // user["email"] = data.email.value
    // user["address"] = data.address.value
    // user["office"] = data.office.value
    // users.push(user)
    // addUserForm.reset()
    // console.log(users)
