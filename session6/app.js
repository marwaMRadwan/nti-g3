// console.log(process.argv);
// if(process.argv[2]%2==0) console.log('even');
// else console.log('odd');

const yargs = require('yargs')
yargs.command({
    command: 'addNew',
    describe:'add new user',
    builder:{
        title:{
            demandOption:true,
            descibe:"note title",
            type:'string'
        },
        content:{
            demandOption:true,
            descibe:"note content",
            type:'string'
        }
    },
    handler: function(argv){
        console.log(`hello from yargs ${argv.title} - ${argv.content}`);
    }
})
yargs.argv
//node app.js addUser --name=marwa --age=36 --salary=1000
//{name:"marwa", age:36, salary:1000}