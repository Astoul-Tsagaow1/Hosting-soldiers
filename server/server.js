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
const path = require('path')
const LocationOfImgs = "uploads";
app.use(express.static(path.join(__dirname,'..',LocationOfImgs)))
console.log(path.join(__dirname,LocationOfImgs));

//// imge upload 

const multer  = require('multer');
const Storage = multer.diskStorage({
  destination : "uploads",
  filename : function (req , file , clb) {
console.log(file.originalname);

    clb(null ,"familyPhoto"+file.originalname) 
      
  }

})

const upload = multer({storage : Storage , limits:{fileSize:5000000}})



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

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    dbo
      .collection(soldiersCollection)
      .findOne({ email: req.body.emailSoldier }, function(err, emailExist) {
        if (err) throw err;
        console.log(emailExist, "email is null or else**************************************");
        let tempArraySoldierHistory = [req.body.hostingHistory];
        let familyobj = {
              email: req.body.email,
              familyName: req.body.familyname,
              hostingDate: req.body.fromDate,
              familyPhonNumber: req.body.PhonNumber,
              familyCity: req.body.familyCity
        }
        tempArraySoldierHistory.push(familyobj);


        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          var myquery = { email: req.body.emailSoldier};
          var newvalues = {
            $set: { hostingHistory: req.body.fromDate}
          };
          dbo
            .collection(soldiersCollection)
            .updateOne(myquery, newvalues, function(err, resx) {
              if (err) throw err;
              console.log("1 document updated");
               console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1" , resx);
              db.close();
            });
        });

      });
  });
  res.status(201).send({email:"was send"});
})

// =============================== Familys
app.post("/family",upload.single('FamilyIMG'), (req, res) => {
  console.log("inside Family form");
  
   console.log(req.body);
   console.log(req.file);
   
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
