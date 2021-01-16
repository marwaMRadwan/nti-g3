// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectId = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = "mongodb://127.0.0.1:27017"
const dbName = "g3"
MongoClient.connect(connectionURL, {useNewUrlParse:true}, (err,client)=>{
    if(err) return console.log('db error')   
    const db = client.db(dbName)
    console.log('connected') 
    //insert single record
    // db.collection('student').insertOne(
    //     {name:'ahmed', age:36}
    // )
    //insert multiple records
    // db.collection('student').insertMany([
    //     {name:'s1'}, {name:'s2'}
    // ])
    //get all collection data
    // db.collection('student').find({age:36}).toArray((err, data)=>{
    //     console.log(data)
    // })

    //find data
    // db.collection('student').find({name:'s1'}).toArray((err, data)=>{
    //     if(err) return console.log('error')
    //     console.log(data)
    // })

    //use objectid
    // db.collection('student').findOne({_id: new ObjectID("6002ca55f4611c157858a0b5")}
    // ,(err, data)=>{console.log(data)}
    // )

    //edit
    // db.collection('student')
    // .updateOne({_id: new ObjectID("6002ca55f4611c157858a0b5")},{$inc:{age:1}})
    // .then(res=>console.log(res))
    // .catch(err=> console.log(err))

    //delete
    db.collection('student').deleteOne({name:'hasan'})
    .then(res=>{console.log(res)})
    .catch(err=> console.log(err))
})






