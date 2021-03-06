const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
const mydb = "soldiersHosting";
const FamliysCollection = "families";
const soldiersCollection = "soldiers";
let nodemailer = require('nodemailer');



module.exports.Deletethis = Deletethis;
module.exports.getHistory = getHistory;
module.exports.sendMail = sendMail;
module.exports.Login = Login;
module.exports.Updatethis = Updatethis;
module.exports.FindAndInsertUsers = FindAndInsertUsers;
module.exports.updateDate = updateDate;

///  chack if user exsist befor Registration and Registration user
function FindAndInsertUsers(req, res, collectionARG) {
  let serchEmail;
    console.log(req.body);

  if (collectionARG == "soldiers") {
    serchEmail = req.body.soldierObj.email;
    console.log(serchEmail);
  } else {
    serchEmail = req.body.email;
    console.log(serchEmail);
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

          console.log(ResponsefromFindEmail, "res from findOne");
          res.json({ emailExist });
        }
      });
  });
}

// User Registration
function InsertUsers(req, collectionARG) {
  let myobj;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    if (collectionARG == "soldiers") {
      myobj = req.body.soldierObj;
      console.log(myobj,"insert new soldier");
    } else {
     
      myobj = req.body;
      myobj.image = req.file.filename;
      console.log(myobj,"Insert new Family");
    }
    dbo.collection(collectionARG).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}


// === Insert date 
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

// Find matching family
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

// Login soldier
function SoldiersUsers(collection, serchEmail, req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log(serchEmail , "inside soldier user");
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo
      .collection(collection)
      .findOne({ email: serchEmail.Email }, function(err, result) {
        if (err) throw err;
        console.log(result,"inside soldier collection");
       if(serchEmail.password === result.password) {
          console.log("success");
          return res.status(209).send(result);
        }
         else {
           console.log(result,"password soldier");
          return res.status(203).send({email : result.email});
         
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
          console.log(result, "result status 205 login");
          

          return res.status(201).send(result);
        }
        else{
                return res.status(203).send({email : result.email});
        }

        db.close();
      });
  });
}

function sendMail(req , res) {
  sendEmailToUser(req,"soldier");
  sendEmailToUser(req,"family");
  updateHistory(req ,soldiersCollection);
  updateHistory(req , FamliysCollection);
  res.status(201).send({email:"was send"});
}


function sendEmailToUser(req , argUser) {
  let sendTo , textSend; 
  if(argUser === "soldier"){
    sendTo = req.body.soldierObj.email;
    textSend = req.body.soldierObj.message;

  }
  else{
    sendTo = req.body.familyObj.email;
    textSend = req.body.familyObj.message;
  }
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soldierhostingwebsite@gmail.com',
      pass: 'jgalofxuuzsfwxls'
    }
  });
  let mailOptions = {
    from: 'soldierhostingwebsite@gmail.com',
    to: sendTo,
    subject: 'Soldier hosting web site',
    text: textSend
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// update history user
function updateHistory(req,collectionARG){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db(mydb);
    let emailSearch;
    if(collectionARG == "soldiers"){
      emailSearch = req.body.familyObj.emailSoldier;
    }
    else{
      emailSearch = req.body.soldierObj.emailFamily;
    }
    dbo
      .collection(collectionARG)
      .findOne({ email: emailSearch}, function(err, emailExist) {
        if (err) throw err;
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
        }
        else{

          newHosting = {
            soldierEmail: req.body.soldierObj.email,
            soldierName: req.body.soldierObj.soldierName,
            hostingDate: req.body.soldierObj.hostingDate,
      }
        }
        tempArrayHistory.push(newHosting);
        myquery = { email:emailSearch};
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          let newvalues
          if(collectionARG != "soldiers"){
            let tempNumber = Number(emailExist.NumberSoldiersHosts) - 1;
            emailExist.NumberSoldiersHosts = tempNumber.toString();
            if(emailExist.NumberSoldiersHosts === "0"){
              emailExist.fromDate = '';
              emailExist.untilDate = '';
            }
             newvalues = {
              $set: { hostingHistory: tempArrayHistory , 
                      NumberSoldiersHosts: emailExist.NumberSoldiersHosts , 
                      fromDate : emailExist.fromDate , 
                      untilDate : emailExist.untilDate
                    }
            };
          }
          else{
            newvalues = {
              $set: { hostingHistory: tempArrayHistory}
          }
          };
          dbo
            .collection(collectionARG)
            .updateOne(myquery, newvalues, function(err, resx) {
              if (err) throw err;
              console.log("1 document updated");
            });
            db.close();
        });

      });
  
    });
    
}
  
  // ==========history request
function getHistory(collection,req, res) {
  let emailSerach = req.body.emailSearch.email;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo
      .collection(collection)
      .findOne({ email: emailSerach}, function(err, result) {
        if (err) throw err;
        console.log("inside soldier collection");
       console.log(result.hostingHistory);
       return res.status(201).send(result.hostingHistory);
      });
      db.close();
  });
}




//// Edit 
function Updatethis(req ,response,collection) {
  let Thempobj;
  MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(collection).findOne({email: req.body.emailForUpdate}, function(err, result) {

      if (result === null) {

        MongoClient.connect(url, function(err, db) {
          console.log(req.body,"find and Update");
          if (err) throw err;
          var dbo = db.db(mydb);
          dbo
            .collection(collection)
            .findOne({ email: req.body.currentEmail}, function(err, result) {
              if (err) throw err;
              Thempobj = {...result};
              if (result === null) {
                console.log("notul found");
                Thempobj = "asto";
              } else {
                
                let Updateobj = req.body;
                console.log(Updateobj, "**123456789");

                if(Updateobj.emailForUpdate === "" || Updateobj.emailForUpdate === undefined){
                  Updateobj.emailForUpdate = Thempobj.email;
                  
                }
                
                for (const [key, value] of Object.entries(Updateobj)) {
                  console.log(`${key} ${value} `); 
                  if(value == "" || value === undefined){
                    Updateobj[key] = Thempobj[key];
                  }
                }
                if(collection === "families"){
                  if (req.file === undefined) {
                    Updateobj.image = Thempobj.image;
                  }
                  else{
                    Updateobj.image = req.file.filename;
                  }
                }           
                Thempobj = result;
                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydb);
                  var myquery = { email: req.body.currentEmail };
                  var newvalues;
                  if(collection == "families"){
                    newvalues = {
                      $set: {
                        familyname: Updateobj.familyname,
                        email: Updateobj.emailForUpdate,
                        PhonNumber: Updateobj.PhonNumber,
                        NumberSoldiersHosts: Updateobj.NumberSoldiersHosts,
                        Password: Updateobj.Password,
                        ConfirmePassword: Updateobj.ConfirmePassword,
                        familyCity: Updateobj.familyCity,
                        fromDate: Updateobj.fromDate,
                        untilDate: Updateobj.untilDate,
                        discriptionFamily: Updateobj.discriptionFamily,
                        hostingHistory: Updateobj.hostingHistory,
                        image: Updateobj.image
                      }
                    };
                  }
                  else{
                    newvalues = {
                      $set: {
                        name : Updateobj.name,
                        lastName : Updateobj.lastName,
                        quite:Updateobj.quite,
                        email:Updateobj.emailForUpdate,
                        phone:Updateobj.phone,
                        password:Updateobj.password,
                        confirmPassword: Updateobj.confirmPassword,
                        address:Updateobj.address,
                        loneSoldier:Updateobj.loneSoldier
                      }
                    };
                  }
                  dbo
                    .collection(collection)
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
;}



//Delete 
 
function Deletethis(req, res,collection) {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var myquery = { email: req.params.id };
  dbo.collection(collection).deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    res.status(200).send("Deleted")
    db.close();
  });
});
}


