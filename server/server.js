console.log("app is loading ....");
const express = require("express");
const app = express();
app.use(express.json());
const helperServer = require("./helperServer");
const soldiersCollection = "soldiers";
const FamliysCollection = "families";
let nodemailer = require('nodemailer');
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
const mydb = "soldiersHosting";
let newObj;


//// imge upload 
const LocationOfImgs = "uploads/"
const multer  = require('multer')
const upload = multer({ dest: LocationOfImgs })


app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({ res: "result from server 123" });
});

app.post("/soldiers", (req, res) => {
   newObj = req.body;
  console.log(newObj, "------------post soldier in server");
  console.log("got req post in server");
  helperServer.FindAndInsertUsers(req, res, soldiersCollection);
});

app.post("/soldierDate", (req, res) => {
  console.log(req.body, "this is date soldier");
  helperServer.updateDate(req, res, soldiersCollection);
});
// ===================================send email
app.post("/sendMail" , (req,res) =>{
  console.log(req.body,"---------email");
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soldierhostingwebsite@gmail.com',
      pass: 'jgalofxuuzsfwxls'
    }
  });
  
  let mailOptions = {
    from: 'soldierhostingwebsite@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: req.body.message
  };
  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.status(201).send({email:"was send"});
})

// =============================== Familys
app.post("/family", (req, res) => {
   console.log(res.body);
   
  helperServer.FindAndInsertUsers(req, res, FamliysCollection)


})
app.post("/datefamily", (req, res) => {
  console.log(req.body, "this is date family");
  helperServer.updateDate(req, res, FamliysCollection);

  console.log(res.status, "this is status");
});


app.post("/Login", (req, res) => {
  helperServer.Login(req, res);
});

// ====== load imge 

app.post("/imgload",upload.single('FamilyIMG'), (req,res)=>{
  console.log(" inside imgload");
  console.log(req.body);
  console.log(req.file);
  
  

  res.status(201).send({body:req.file})

}) 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
