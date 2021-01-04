userKeys = ['name','age','email','address','office']
users = []
addUserForm = document.querySelector('#addUser')

document.querySelector('#showHide').addEventListener('click', function(e){
    this.textContent == "show"? this.textContent="hide":this.textContent="show";
    document.querySelector('#formSection').classList.toggle('d-none')
})
addUserForm.addEventListener('submit', function(e){
    e.preventDefault()
    let data = this.elements
    let user ={}
    user["name"] = data.name.value
    user["age"] = data.age.value
    user["email"] = data.email.value
    user["address"] = data.address.value
    user["office"] = data.office.value
    users.push(user)
    addUserForm.reset()
    console.log(users)
})
