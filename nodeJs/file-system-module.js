const http = require('http') //http module will create a server and can have listen at port 9000

const fs = require('fs') // File system module will help us to select any files in sync or async way

const SERVER = http.createServer((req,res)=>
{   
    
    // /fs.readFile(): select file in directory in asynchrounous way
    // utf-8 : will help us to convert buffer codes in html code 
    fs.readFile('./home.html','utf-8',(error,data)=>{

        if(!error){  //if error not exist so display data 
            // console.log(data)
            res.end(data)  //res.end(data): will Display the results on screen
        }
    })  


})

SERVER.listen(9000)  //listen your application at port number 9000