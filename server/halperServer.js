const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
const  url = "mongodb://localhost:27017/";
const mydb = 'soldiersHosting';
const soldiersCollection = 'soldiers'

module.exports.findSoldiers = findSoldiers;

function findSoldiers(req,res){
  let serchEmail = req.body.email
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
        dbo.collection(soldiersCollection).findOne({serchEmail}, function(err, emailExist) {
          if (err) throw err;
          
          if (!emailExist) {
            insertSoldiers();
           res.status(201).send({new:true});
          }
          else {
            console.log('user not found');
            res.status(201).send({new:false});
          }
        });
        
      });
}


function insertSoldiers(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(mydb);
        const myobj = req.body;
        dbo.collection(soldiersCollection).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
      });
    });
}

