const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const  url = "mongodb://localhost:27017/";
const mydb = 'soldiersHosting';


module.exports.FindAndInsertUsers = FindAndInsertUsers;
module.exports.updateDate = updateDate;

function FindAndInsertUsers(req,res,collectionARG){
  let serchEmail ;
  let ResponseFromFindEmail;
  if(collectionARG == "soldiers"){
   serchEmail = req.body.soldierObj.email;
  }
  else{
    serchEmail = req.body.Familyobj.email;

    console.log(serchEmail, "undifind");
    

  }
  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
        dbo.collection(collectionARG).findOne({email:serchEmail},(function(err, emailExist) {
          if (err) throw err;     
          console.log(emailExist , "email is null or else ");
               
          if (emailExist == null ) {
            InsertUsers(req,collectionARG);
            console.log("email noot Exist");
            res.status(201).send(req.body);
          }
          else {
           console.log("emailExist");
           ResponsefromFindEmail = {...emailExist};

           console.log(ResponsefromFindEmail , "res from findOne");
            res.json({emailExist});
          }
        }));
        
      });
}


function InsertUsers(req,collectionARG){
  let myobj ;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
       if (collectionARG == "soldiers") {
         console.log("insert new soldier");
         
        myobj = req.body.soldierObj;
       }
       else{
        console.log("insert new Family");

        myobj = req.body.Familyobj;

       }
        dbo.collection(collectionARG).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
      });
    });
}

// === update 
function updateDate(req,res,collectionARG){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { email: req.body.CurrentEmail };
    var newvalues = {$set: {fromDate: req.body.fromDate , untilDate:req.body.untilDate} };
    dbo.collection(collectionARG).updateOne(myquery, newvalues, function(err, resx) {
      if (err) throw err;
      console.log("1 document updated");   
      res.status(201).send(req.body);
            db.close();
    });
  });
}




