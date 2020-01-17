console.log("app is loading ....");
const express = require("express");
const app = express();
app.use(express.json());
const helperServer = require('./helperServer');
const soldiersCollection = 'soldiers'
const FamliysCollection ="families"


app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server 123"});
});


app.post("/soldiers",(req,res) => {
  let newObj = req.body;
  console.log(newObj , '------------post soldier')
  console.log('got req post in server')
  helperServer.FindAndInsertUsers(req,res,soldiersCollection)
});
 

app.post("/family",(req,res)=>{
 
  helperServer.FindAndInsertUsers(req,res,FamliysCollection)
  
})

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});