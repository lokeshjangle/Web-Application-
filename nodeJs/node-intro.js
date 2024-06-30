console.log('hello')
var a = 10
var b = 20
console.log(a+b)
console.log([10,20,30])
console.log({name:"user1"})
console.log(10=='10')  //== compare only values
console.log(10==='10') //=== compare values and datatypes both

//function
function f1()
{
    console.log(Math.sqrt(100))
}
f1()

//Anonymous function
var f2 = function(){
    console.log(3>2)
}

f2();

//Arrow function
var f3 = ()=>{
    var brand = 'nike'
    console.log(`Hello ${brand}`)
}
f3();

//for loop
for(let i=0;i<5;++i){
    console.log(i)
}
// console.log(i)
//For_each
let obj = {
    Lokesh: 6.7,
    Shubham: 6.85,
    Shashank: 8.8,
   
}
for(let i in obj){
    console.log("Marks of " + i +" are: " + obj[i])
}

//check document object in node js
// console.log(document)


// var xmlhttp = new XMLHttpRequest()  //not available in node js enviroment 
// console.log(xmlhttp)

setTimeout(()=>{
    console.log('timer api tested')
},2000)