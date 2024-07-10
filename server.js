require("dotenv").config();

const express = require ('express');
const mongoose = require ('mongoose')


const developerRoute = require ('./routes/developerRoute')
const server =express()



//middle ware
server.use(express.json());



// route
server.use  ('/api/developer', developerRoute);

// Connection
mongoose.connect(
    process.env.MONGO_URI
).then(()=>{
    server.listen (process.env.PORT, ()=>{
        console.log("server is ok 3000")
    });
}).catch((error)=>{
    console.error ("the error", error)
});