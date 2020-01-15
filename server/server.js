console.log("app is loading ....");

const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());

const helperServer = require('./helperServer');

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server 123"});
});



app.post("/soldier",(req,res) => {
  let soldierDetails = req.body;
  console.log(soldierDetails , '------post soldier');
  console.log('got req post in server');
  helperServer.findSoldiers(req,res)
});



  
app.post("/family",(req,res)=>{
  console.log("this is the family");
 console.log(res.data);
  res.status(201).send(req.data)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
