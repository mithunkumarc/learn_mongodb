instead of install local mongo db
use free mongo db atlas


link to create account : 

    https://www.mongodb.com/cloud/atlas?tck=docs_server

    you can use google credentials for login
    create cluster

    connect : choose with application : it gives you uri and connection sample code
    
  
dependencies : npm

    Mongodb
    Mongoose
    
example code : 

index.js

      const { MongoClient } = require('mongodb');
      const Db = "mongodb+srv://mithunkumarc:<password>@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";

      const client = new MongoClient(Db, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      var _db;

      module.exports = {
          connectToServer: function(callback) {
              client.connect(function(err, db) {
                  if(db) {
                      _db = db.db("sales");
                      console.log("got connection");
                  }
              })
          },
          getDb: function() {
              return _db;
          }
      }
      
      
server.js

        const express = require('express');
        const app = express();
        const cors = require('cors');
        const port = process.env.PORT || 5000;
        app.use(cors());
        app.use(express.json());
        const dbo = require('./db/conn.js');
        app.listen(port, () => {
            dbo.connectToServer(function (err) {
                if(err) console.error(err);
            });
            console.log(`server listening on port ${port}`);
        });
