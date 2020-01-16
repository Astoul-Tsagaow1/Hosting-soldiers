const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const  url = "mongodb://localhost:27017/";
const mydb = 'soldiersHosting';


module.exports.FindAndInsertUsers = FindAndInsertUsers;

function FindAndInsertUsers(req,res,collectionARG){
  let serchEmail ;
  let ResponseFromFindEmail;
  if(collectionARG == "soldiers"){
   serchEmail = req.body.soldiersObj.email;
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
           ResponsefromFindEmail = emailExist;
            res.status(204).send(ResponsefromFindEmail);
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
         
        myobj = req.body.soldiersObj;
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

