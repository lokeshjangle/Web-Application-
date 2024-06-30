// Create a server( eg. LIVE SERVER PLUGIN)

//http => built-in module in javascript
const http = require('http')  //importing http module  like this(import * from 'http')

//create local server to receive data 
const server = http.createServer((req, res)=>{  //req = incoming from android/react application 
                        
        //res = outgoing value from server to application
        res.end("Live server working using Node js");
        //http://127.0.0.1:9000 => local IP
        //http://localhost:9000/

})


server.listen(9000)  //server.listen(port_number)  no>1024 port and below < 65535

//default port number for mysql = 3306
//default port number for mongodb = 27017
//default port number for http-request = 80

