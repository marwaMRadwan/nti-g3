const yargs = require("yargs");
const fs = require('fs')
readFileData = function() {
    data = JSON.parse(fs.readFileSync('data.json').toString());
    if(data.toString().length==0)
                   console.log('wrong')
            else {return data}     
    }
addNewData = function(customer) {
    data = readFileData() 
    data.push(customer)
    fs.writeFileSync('customer.json', JSON.stringify(data))
}
showAllData = function(){
    data = readFileData()
     if(data.length>0) console.log(data);
     else console.log("nothing here")
 }
 
 showSingleCustomer = function(single){
     data = readFileData()
     result = data.find(element=>{
         return element.single == single
     })
     if(!result) console.log("not found")
     else console.log(result)
 }
 
yargs.command({
    command:"addCustomer",
    builder:{
name:{
demandOption:true,
describe:"ereny",
type:"string"
},
balance:{
 demandOption:true,
describe:"balance",
type:"number"
},
accNum:{
 demandOption:true,
describe:"account",
typ:"number"
},


    },
    handler:function(argv){
user ={
    name:argv.name,
    balance: argv.balance,
accNum:argv.accNum
}
addNewData(user)
    }
}),
yargs.argv



