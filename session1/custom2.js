function getBorg(year){
let abrag = [
    'monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon','snake', 'horse', 'sheep'
] //0=>11
//let year = prompt('birthyear? ')
let myBorg = ( +year + 9 ) % 12  //1 =>12
console.log(abrag[myBorg-1]);
}
//getBorg(2006)
// console.log(document.querySelector('form').elements.userName);
document.querySelector('#task1').addEventListener('submit', function(e){
    e.preventDefault()
    data = e.target.elements
    user={
        name: data.userName.value,
        password : data.pass.value
    }
    console.log(user);
})
document.querySelector('#task2').addEventListener('submit', function(e){
    e.preventDefault()
    data = e.target.elements
    getBorg(data.BY.value)
})

// document.querySelector('#task1').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e);
// })


abrag = [
    'monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon','snake', 'horse', 'sheep'
]
abrag.forEach((element, index) => {
    console.log(`${index+1} - data ${element}`)  // i + "- data "+ element
});

// i=0
// while(i<abrag.length){
//     console.log(abrag[i])
//     i++
// }
// for(i=0; i<abrag.length;i++) console.log(abrag(i))

function sum(x,y,z=0){  //z=null
    return (x+y+z)     // !z ? x+y : x+y+z
}

sum(1,2) //3
sum(1,2,3) //6


// f => c     (f - 32 ) * 5/9
// c => f     (C × 9/5) + 32
function converter(temp, flag='c'){
    if(flag=='c') data = (temp-32)*5/9
    else if(flag=='f') data = (temp*9/5)+32
    else data = 'invalid type'
    return data
}
console.log(converter(50))
















