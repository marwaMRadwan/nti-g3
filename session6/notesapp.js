//add note - show note - edit note - delete note 
const fs = require('fs')
const yargs = require('yargs')

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
    if(data.length>0) console.table(data);
    else console.log("no notes found")
}
addNewData = function(note) {
    data = readFileData() //=> return array
    data.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(data))
}
showSingleNote = function(title){
    data = readFileData()
    result = data.find(element=>{
        return element.title == title
    })
    if(!result) console.log("not found")
    else console.table(result)
}
yargs.command({
    command:"showSingle",
    builder:{ title:{type:'string', demandOption:true}},
    handler:function(argv){showSingleNote(argv.title)}
})
yargs.command({
    command:'showAllNotes',
    describe:'show all stored notes',
    handler: function(){
        showAllData()
    }
})
yargs.command({
    command:"addNewNote",
    describe:"add new note to our file",
    builder:{
        title:{ type:'string', demandOption:true},
        content:{ type:'string'}
    },
    handler: function(argv){
        let note = {title: argv.title, content:argv.content}
        addNewData(note)
    }
})
yargs.argv