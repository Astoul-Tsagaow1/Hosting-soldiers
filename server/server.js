const express = require('express');
const server = express();

server.get("/api" , (req , res)=>{
    console.log("root is accessed");
    res.send({res:"result from shay and astoul!!!"});
});


server.listen(process.env.PORT || 5000 , ()=>{
    console.log('listening on port 5000')
});
