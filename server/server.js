console.log("app is loading ....");
const express = require("express");
const app = express();
app.use(express.json());
const halperServer = require('./halperServer');

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server 123"});
});

<<<<<<< Updated upstream:server/server.js


app.post("/soldier",(req,res) => {
  let newObj = req.body;
  console.log(newObj , '------------post soldier')
  console.log('got req post in server')
  halperServer.findSoldiers(req,res)
});



  
=======
app.post("/family",(req,res)=>{
  console.log("this is the family");
 console.log(res.data);
 

  res.status(201).send(req.data)
  
})
>>>>>>> Stashed changes:server/index.js

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
