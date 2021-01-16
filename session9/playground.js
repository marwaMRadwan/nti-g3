/*
                              /      success (resolve)
promise ---> pending  ----> 
                              \      reject
*/

const mypromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(3*5)
        reject('err')
    },3000)
})

mypromise
.then((r)=>{ console.log(r)})
.catch((e)=>{console.log(e)})

x=async()=>{
    await mypromise()
}