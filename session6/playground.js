// console.log("start")
// setTimeout(()=>{
//     console.log('hi')
// }, 3000)
// console.log('end')

// const request = require('request')
// data = ""
// const url ="https://jsonplaceholder.typicode.com/users"
// request({ url },(err, res)=>{
//     data = JSON.parse(res.body)
//     console.table(data)
// })

// const add = (a, b, callback) =>{ //(a,b,a+b)
//     setTimeout(()=>{
//         callback(a+b)
//     },5000)
//     console.log('hello')
// }

// add(1,15,(sum)=>{
//     console.log(sum)
// })

// x=2; y=7;
// add(x,y,(ay7aga)=>{
//     console.log(ay7aga)
// })
//promises
// const add = (a,b)=>{
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=> {resolve(a+b)}, 2500 )
//     })
// }
// //5+3  +6    +15
// add(5,3).then((sum)=>{   //resolve(8) => sum = 8
//     console.log(sum)   //8
//     add(6,sum).then((sum1)=>{ //add(6,8) => resolve(14) =>sum1=14
//         console.log(sum1)   //14
//     }).catch((e)=>{console.log('second then')})
// }).catch((e)=>{
//     console.log('err')
// })


//async await
const add = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0) return reject('a must be greater than 0')
            resolve(a+b)
        },2500)
    })
}
const start = async() =>{
    const s1 = await add(5,-30) //-25
    console.log('1')
    const s2 = await add(s1,11)//-25,11
    console.log('2')
    return s2
}
start().then(res=>{ console.log(res) }).catch((e)=>{ console.log(e) })





