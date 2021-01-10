/* show all notes => done , add note => note { name:'x', type:'xt'} */
//file not found  - data in file length  = 0 - data not array => done
const fs = require('fs')
let mynote = {name: 'note 1', type: 'type 1'}
// console.log(fs.readFileSync('notes.js'));
readFileData = function(){
    try{
        data = fs.readFileSync('notes.json')
        if(data.toString().length==0) throw new Error('errrr')
        data = JSON.parse(data.toString())
        if(!Array.isArray(data)) throw new Error('')
    }
    catch(e){
        data = []
        fs.writeFileSync('notes.json', "[]")
    }
    return data    
}
showAllData = function(){
    data = readFileData()
    if(data.length>0) console.table(readFileData());
    else console.log("no notes found")
}
addNewData = function(note) {
    data = readFileData() //=> return array
    data.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(data))
}
showAllData()
addNewData(mynote)
showAllData()