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
  console.log("got history request")
  helperServer.getHistory(soldiersCollection, req, res);
});

app.post("/historyFamily", (req, res) => {
  helperServer.getHistory(FamliysCollection, req, res);
});

app.patch("/UpdateSoldier",(req, response) => {
  console.log(req.body, "**** UpDate *****");
  helperServer.Updatethis(req, response, soldiersCollection);
});


app.patch("/Updatefamily", upload.single("FamilyIMG"), (req, response) => {
  console.log(req.file, "**** UpDate *****");
  helperServer.Updatethis(req, response, FamliysCollection);
});

app.delete("/DeleteFamily/:id"  ,(req, res)=>{
console.log("inside Delete family");
console.log(req.params.id);
helperServer.Deletethis(req, res, FamliysCollection);
})

app.delete("/DeleteSoldier/:id"  ,(req, res)=>{
  console.log("inside Delete soldier");
  console.log(req.params.id);
  helperServer.Deletethis(req, res, soldiersCollection);
  })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
