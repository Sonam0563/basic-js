//array reduce method
let arr=[1,2,3,5,8]
arr.reduce((h1,h2)=>{
    return h1+h2
})
// array filter
let arr2=[1,8,9,4,5]
let a2=arr2.filter((a)=>{
    return a <10
})
console.log(a2)
// array maping
let arr3=[1,6,2,4,3,9]
let a=arr3.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)