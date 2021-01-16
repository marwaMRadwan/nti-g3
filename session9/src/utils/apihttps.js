const https = require('https')
const url = `https://jsonplaceholder.typicode.com/posts/1`
const requestApiPost = https.request(url, (response)=>{
    let data = ''
    response.on('data', (chunck)=>{
        data+=chunck.toString()
    })
    postData = response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
        })
})
requestApiPost.on('error',(err)=>{console.log(err)})
requestApiPost.end()
console.log(requestApiPost)
