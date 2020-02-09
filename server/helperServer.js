const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
const mydb = "soldiersHosting";
const FamliysCollection = "families";
const soldiersCollection = "soldiers";




module.exports.FindAndInsertUsers = FindAndInsertUsers;
module.exports.updateDate = updateDate;
///  chack if user exsist
function FindAndInsertUsers(req, res, collectionARG) {
  let serchEmail;
    console.log(req.body);

  if (collectionARG == "soldiers") {
    
    serchEmail = req.body.soldierObj.email;
    console.log(serchEmail, "undifind----------------------------");
  } else {
    serchEmail = req.body.email;

    console.log(serchEmail, "undifind*******");
  }

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    dbo
      .collection(collectionARG)
      .findOne({ email: serchEmail }, function(err, emailExist) {
        if (err) throw err;
        console.log(emailExist, "email is null or else ");
        
        if (emailExist == null) {
          InsertUsers(req, collectionARG);
          console.log("email noot Exist");
          res.status(201).send(req.body);
        } else {
          console.log("emailExist");
          ResponsefromFindEmail = { ...emailExist };
          res.status(400)
          console.log(ResponsefromFindEmail, "res from findOne");
          res.json({ emailExist });
        }
      });
  });
}

function InsertUsers(req, collectionARG) {
  let myobj;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    if (collectionARG == "soldiers") {
      console.log("insert new soldier");

      myobj = req.body.soldierObj;
      console.log(myobj);
      
    } else {
      console.log("insert new Family");

      myobj = req.body;
      myobj.image = req.file.filename;
      console.log(myobj , "$$$$$$$");

    }
    dbo.collection(collectionARG).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

// === update
function updateDate(req, res, collectionARG) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { email: req.body.CurrentEmail };
    var newvalues = {
      $set: { fromDate: req.body.fromDate, untilDate: req.body.untilDate }
    };
    dbo
      .collection(collectionARG)
      .updateOne(myquery, newvalues, function(err, resx) {
        if (err) throw err;
        console.log("1 document updated");
        if (collectionARG == "datefamily") {
          res.status(201).send(req.body);
          return;
        } else {
          FindRelevantFamilies(req, res);
        }
        db.close();
      });
  });
}

function FindRelevantFamilies(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    const myqury = req.body.fromDate;
    console.log(myqury, "date req from soldoer");
    dbo
      .collection(FamliysCollection)
      .find({ fromDate: req.body.fromDate })
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result, "result from db");
        res.status(201).send(result);
      });
  });
}

function SoldiersUsers(collection, serchEmail, req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log(serchEmail , "inside soldier user");
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo
      .collection(collection)
      .findOne({ email: serchEmail.Email }, function(err, result) {
        if (err) throw err;
        console.log("inside soldier collection");
       console.log(result);
       if(serchEmail.password === result.password) {
          console.log("success");
          return res.status(209).send(result);
        }
         else {
          res.status(205).send("Fail");
          console.log("Fail");
        }
      });
  });
}

function Login(req, res) {
  console.log("Inside login");
  serchEmail = req.body;
  console.log("Serch this Email", serchEmail.Email);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo
      .collection(FamliysCollection)
      .findOne({ email: serchEmail.Email}, function(err, result) {
        console.log(result, "befor status 205 login ***********");

        if (result === null) {
          console.log("not exsit in Familys ");
          return SoldiersUsers(soldiersCollection, serchEmail, req, res);
        }

        if (result.Password === serchEmail.password) {
          console.log("success");
          console.log(result, "result status 205 login ");
          

          return res.status(201).send(result);
        }

        db.close();

        // if (err) throw err;
        // console.log(result, "This is result");
      });
  });
}

function sendMail(req , res) {
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
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
  updateHistory(req , res , soldiersCollection);
  updateHistory(req , res , FamliysCollection);
  res.status(201).send({email:"was send"});
}

function updateHistory(req,res,collectionARG){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    let emailSearch;
    if(collectionARG == "soldiers"){
      emailSearch = req.body.ObjHistory.familyObj.emailSoldier;
    }
    else{
      emailSearch = req.body.ObjHistory.soldierObj.emailFamily;
    }
    dbo
      .collection(collectionARG)
      .findOne({ email: emailSearch}, function(err, emailExist) {
        if (err) throw err;
        console.log(emailExist, "email is null or else**************************************");
        let myquery,newHosting;
        let tempArrayHistory = [...emailExist.hostingHistory];
        if(collectionARG == "soldiers"){
              newHosting = {
                fanilyEmail: req.body.familyObj.email,
                familyName: req.body.familyObj.familyName,
                hostingDate: req.body.familyObj.hostingDate,
                familyPhonNumber: req.body.familyObj.familyPhonNumber,
                familyCity: req.body.familyObj.familyCity
          }
          tempArrayHistory.push(newHosting);
        }
        else{
          newHosting = {
            soldierEmail: req.body.soldierObj.email,
            soldierName: req.body.soldierObj.soldierName,
            hostingDate: req.body.soldierObj.hostingDate,
            soldierPhonNumber: req.body.soldierObj.phoneNumberSoldirs,
      }
           tempArrayHistory.push(newHosting);
        }
        myquery = { ...emailSearch};
        MongoClient.connect(url, function(err, db) {
          console.log(tempArrayHistory , "$%$%yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
          if (err) throw err;
          var dbo = db.db(mydb);
          
          let newvalues = {
            $set: { hostingHistory: tempArrayHistory}
          };
          dbo
            .collection(collectionARG)
            .updateOne(myquery, newvalues, function(err, resx) {
              if (err) throw err;
              console.log("1 document updated");
               console.log(resx);
               
              
            });
            db.close();
        });

      });
  
    });
    
}
  
  



module.exports.sendMail = sendMail;
module.exports.Login = Login;
