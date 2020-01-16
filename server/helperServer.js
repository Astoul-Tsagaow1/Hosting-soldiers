const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const  url = "mongodb://localhost:27017/";
const mydb = 'soldiersHosting';


module.exports.FindAndInsertUsers = FindAndInsertUsers;

function FindAndInsertUsers(req,res,collectionARG){
  let serchEmail ;
  if(collectionARG == "soldiers"){
  serchEmail = req.body.email;
  }
  else{
    serchEmail = req.body.familyemail;

  }
  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
        dbo.collection(collectionARG).findOne({serchEmail}, function(err, emailExist) {
          if (err) throw err;          
          if (emailExist == null) {
            InsertUsers(req,collectionARG);
            console.log("email noot Exist");
            res.status(201).send(req.body);
          }
          else {
           console.log("emailExist");
           
            res.status(401).send(serchEmail);
          }
        });
        
      });
}


function InsertUsers(req,collectionARG){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
        const myobj = req.body;
        dbo.collection(collectionARG).insertOne({myobj}, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
      });
    });
}

