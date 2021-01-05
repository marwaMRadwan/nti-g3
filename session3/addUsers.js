//let t = JSON.parse(localStorage.getItem('tasks'))
address = ['nasr city', 'giza', 'mohandsen']
userKeys = ['name','age','email','address','office']
users = JSON.parse(localStorage.getItem('users')) || []
// if (users==null) users = []
addUserForm = document.querySelector('#addUser')
usersTable = document.querySelector('#usersTable')
/* show address options */
temp = ""
address.forEach(add=>{
    temp += `<option value="${add}">${add}</option>`
})
document.querySelector('select').innerHTML += temp
/* end show address options */
/*start show hide button*/
document.querySelector('#showHide').addEventListener('click', function(e){
    this.textContent == "show"? this.textContent="hide":this.textContent="show";
    document.querySelector('#formSection').classList.toggle('d-none')
})
/*end show hide button*/
/*add user*/
addUserForm.addEventListener('submit', function(e){
    e.preventDefault()
    let data = this.elements  //this = e.target = addUserForm
    let user ={}
    userKeys.forEach( key => { user[key] = data[key].value })
    users.push(user)
    addUserForm.reset()
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))
    singleShow(user, users.length-1)
})
/*end add user event*/
/*add new element*/
let addElement = function(elementType, elementTxt, parent){
    ele = document.createElement(elementType)
    ele.textContent = elementTxt
    parent.appendChild(ele)
}
/*end add new element*/

/*show all users*/
let singleShow = function(user, i){
    tr = document.createElement('tr')
    addElement('td', i+1, tr)
    userKeys.forEach(key=>{ addElement('td', user[key], tr) })
    usersTable.appendChild(tr)
}
let showUsers = function(){
    users.forEach((user, i)=>{
        singleShow(user, i)
    })
}
showUsers()
/*end show all*/







