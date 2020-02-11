console.log("app is loading ....");
const express = require("express");
const app = express();
app.use(express.json());
const helperServer = require("./helperServer");
const soldiersCollection = "soldiers";
const FamliysCollection = "families";
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
const mydb = "soldiersHosting";
let newObj;
const path = require("path");
const LocationOfImgs = "uploads";
app.use(express.static(path.join(__dirname, "..", LocationOfImgs)));
console.log(path.join(__dirname, LocationOfImgs));

///// SMS
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: '9d8c72a9',
//   apiSecret: '4qzLkHbjOuaTEjbT',
// });

// const from = 'x';
// const to = '972532776230';
// const text = 'Hello from Nexmo';

// nexmo.message.sendSms(from, to, text);

//// imge upload

const multer = require("multer");
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: function(req, file, clb) {
    console.log(file.originalname);

    clb(null, "familyPhoto" + file.originalname);
  }
});

const upload = multer({ storage: Storage, limits: { fileSize: 5000000 } });

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
app.post("/sendMail", (req, res) => {
  console.log(req.body, "---------email");
  helperServer.sendMail(req, res);
});
// =============================== Familys
app.post("/family", upload.single("FamilyIMG"), (req, res) => {
  console.log("inside Family form");

  console.log(req.body);
  console.log(req.file);

  helperServer.FindAndInsertUsers(req, res, FamliysCollection);
});
app.post("/datefamily", (req, res) => {
  console.log(req.body, "this is date family");
  helperServer.updateDate(req, res, FamliysCollection);

  console.log(res.status, "this is status");
});

app.post("/Login", (req, res) => {
  helperServer.Login(req, res);
});

// =====================History request
app.post("/historySoldier", (req, res) => {
  helperServer.getHistory(soldiersCollection, req, res);
});

app.post("/historyFamily", (req, res) => {
  helperServer.getHistory(FamliysCollection, req, res);
});

app.patch("/Updatefamily", upload.single("FamilyIMG"), (req, response) => {
  console.log(req.file, "**** UpDate *****");
  let Thempobj;
  // function Updatethis(Email ,collection ) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      dbo.collection(FamliysCollection).findOne({email: req.body.email}, function(err, result) {

        if (result === null) {

          MongoClient.connect(url, function(err, db) {
            console.log("find and Update");
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo
              .collection(FamliysCollection)
              .findOne({ email: req.body.emailUpDate }, function(err, result) {
                if (err) throw err;
        
                Thempobj = result;
                console.log(Thempobj, "**123");
                if (result === null) {
                  console.log("notul found");
                  Thempobj = "asto";
                } else {
        
                  let Updateobj = req.body
                  for (const [key, value] of Object.entries(Updateobj)) {
                    console.log(`${key} ${value}`); 
                    if(value == ""){
                      Updateobj[key] = Thempobj[key];
                    }
                  }
                  console.log(Updateobj , "after update obj ")
        
        
                  Thempobj = result;
                  console.log(Thempobj, "inside UpdateThis function");
                  console.log(Thempobj, "******* fromUpdate , from find and Update  ");
                  MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(mydb);
                    var myquery = { email: req.body.emailUpDate };
                    var newvalues = {
                      $set: {
                        familyname: req.body.familyname,
                        email: req.body.email,
                        PhonNumber: req.body.PhonNumber,
                        NumberSoldiersHosts: req.body.NumberSoldiersHosts,
                        Password: req.body.Password,
                        ConfirmePassword: req.body.ConfirmePassword,
                        familyCity: req.body.familyCity,
                        fromDate: req.body.fromDate,
                        untilDate: req.body.untilDate,
                        discriptionFamily: req.body.discriptionFamily,
                        hostingHistory: req.body.hostingHistory,
                        image: req.file
                      }
                    };
                    dbo
                      .collection(FamliysCollection)
                      .updateOne(myquery, newvalues,{returnNewDocument: true}, function(err, res) {
                        if (err) throw err;
                        console.log("1 document updated");
                        console.log(Updateobj , "**** this is uPdate obj ");
                        
                          response.status(201).send(Updateobj);

                        db.close();
                      });
                  });
                }
              });
          })
          
        }
        else{
          console.log("cant Edit email is allredy exit");

          response.status(203).send(result.email)
          
        }
        if (err) throw err;
        console.log(result);
        db.close();
      });
    })
 ;
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
