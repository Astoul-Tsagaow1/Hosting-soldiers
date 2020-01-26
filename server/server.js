console.log("app is loading ....");
const express = require("express");
const app = express();
app.use(express.json());
const helperServer = require('./helperServer');
const soldiersCollection = 'soldiers'
const FamliysCollection ="families"


const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const  url = "mongodb://localhost:27017/";

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
 
// =============================== Familys 
app.post("/family",(req,res)=>{
 
  helperServer.FindAndInsertUsers(req,res,FamliysCollection)
  
})
app.post("/datefamily",(req,res)=>{


  console.log(req.body , "this is date ");
  

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("soldiersHosting");
    var myquery = { email: req.body.CurrentAimail };
    var newvalues = {$set: {fromDate: req.body.from , untilDate:req.body.Until} };
    dbo.collection("families").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      // console.log(res);
      
      db.close();
    });
  });

})



 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});