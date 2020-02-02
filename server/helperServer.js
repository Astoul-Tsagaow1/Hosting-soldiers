const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
const mydb = 'soldiersHosting';
const FamliysCollection = "families";
const soldiersCollection = 'soldiers'


module.exports.FindAndInsertUsers = FindAndInsertUsers;
module.exports.updateDate = updateDate;

function FindAndInsertUsers(req, res, collectionARG) {
  let serchEmail;
  if (collectionARG == "soldiers") {
    serchEmail = req.body.soldierObj.email;
    console.log(serchEmail, "undifind----------------------------");
  }
  else {
    serchEmail = req.body.Familyobj.email;

    console.log(serchEmail, "undifind");


  }

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    dbo.collection(collectionARG).findOne({ email: serchEmail }, (function (err, emailExist) {
      if (err) throw err;
      console.log(emailExist, "email is null or else ");

      if (emailExist == null) {
        InsertUsers(req, collectionARG);
        console.log("email noot Exist");
        res.status(201).send(req.body);
      }
      else {
        console.log("emailExist");
        ResponsefromFindEmail = { ...emailExist };

        console.log(ResponsefromFindEmail, "res from findOne");
        res.json({ emailExist });
      }
    }));

  });
}


function InsertUsers(req, collectionARG) {
  let myobj;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    if (collectionARG == "soldiers") {
      console.log("insert new soldier");

      myobj = req.body.soldierObj;
    }
    else {
      console.log("insert new Family");

      myobj = req.body.Familyobj;

    }
    dbo.collection(collectionARG).insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

// === update 
function updateDate(req, res, collectionARG) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { email: req.body.CurrentEmail };
    var newvalues = { $set: { fromDate: req.body.fromDate, untilDate: req.body.untilDate } };
    dbo.collection(collectionARG).updateOne(myquery, newvalues, function (err, resx) {
      if (err) throw err;
      console.log("1 document updated");
      if (collectionARG == 'datefamily') {
        res.status(201).send(req.body);
        return;
      }
      else {
        FindRelevantFamilies(req, res);
      }
      db.close();
    });
  });
}



function FindRelevantFamilies(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err)
      throw err;
    var dbo = db.db(mydb);
    const myqury = req.body.fromDate;
    console.log(myqury, 'date req from soldoer');
    dbo.collection(FamliysCollection).find({ fromDate: req.body.fromDate }).toArray(function (err, result) {
      if (err)
        throw err;
      console.log(result, 'result from db');
      res.status(201).send(result);
    });
  });
}


function SoldiersUsers(collection,serchEmail,req,res) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(collection).findOne({email:serchEmail.Email}, function(err, result) {
      if (err) throw err;
      console.log("inside Solders collection");

      console.log(result);
      if (serchEmail.password === result.password ) {

        console.log("success");
        
            return  res.status(201).send("soldiars");
      }
      else{
  res.status(205).send("Fail")
        console.log("Fail");
      
        
      }


    });
  });
}

function Login(req, res) {
  console.log("Inside login");
  serchEmail = req.body;
  console.log("Serch this Email", serchEmail.Email);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(FamliysCollection).findOne({ email: serchEmail.Email }, function (err, result) {
      if (result === null) {
        console.log("not exsit in Familys ");
      return  SoldiersUsers(soldiersCollection,serchEmail,req,res) 
      
      }

      if (result.familyPassword === serchEmail.password) {
        console.log("success");

           return res.status(201).send("Familys");
      }
      else{
        res.status(201);

      }
     
        db.close();

      

      // if (err) throw err;
      // console.log(result, "This is result");


    });
  });

}

module.exports.Login = Login