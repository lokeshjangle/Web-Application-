const express = require("express")
const cors = require("cors")

const mongoose = require("mongoose")  //mongoos is use to connect with  mongodb database
const app = express()

app.use(cors()) //which will allow get data from any origin 

app.use(express.json())  //use to convert data in json format which fetch from mongodb



//Connect mongodb with mongoos
mongoose
    .connect("mongodb+srv://lokeshjangale:1208@cluster0.pzesj8h.mongodb.net/met")  //connect mongodb live server
    .then(() => {   //If connection is successful .then is use 
        console.log("DB Connected")
    })
    .catch(() => {  //If connection is rejected .catch will use
        console.log("DB Error")
    })

//Prepared for schema
const schema = mongoose.Schema;

const userSchema = new schema({  //create schema like table in sql add colume name 
    username: String,
    userage: Number,
    userlocation: String
})


//Bind schema with collection/table in mongodb
const userModel = mongoose.model('users', userSchema)  //.model(<collectionName>,<schemaName>)
app.get("/api/selectUsers", async (req, res) => {  //use to fetch data from mongodb
    var result = await userModel.find()
    console.log(result)
    res.send(result)
})

//http://localhost:9000/api/selectUsers1
app.get("/api/selectUsers1", async (req, res) => {  //use to fetch data from mongodb
    var result = await userModel.find()
    console.log(result)
    res.render('users.ejs',{data:result})
})

app.post("/api/addUsers", async (req, res) => {  //use to add data in mongodb
    console.log(req.body)
    var instance = new userModel(req.body)
    var ans = await instance.save() //await is use to say thread to wait for thread to complete task
    res.send(ans)
})


app.listen(9000)  //use to set port / or listen from port  number