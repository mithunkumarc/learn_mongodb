instead of install local mongo db
use free mongo db atlas


link to create account : 

    https://www.mongodb.com/cloud/atlas?tck=docs_server

    you can use google credentials for login
    create cluster

    connect : choose with application : it gives you uri and connection sample code
    
    
connection code by atlas


        const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = "mongodb+srv://mithunkumarc:<yourpassword>@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
          const collection = client.db("test").collection("devices");
          // perform actions on the collection object
          client.close();
        });

  
dependencies : npm

    Mongodb
    Mongoose
    
example code : 

conn.js

      const { MongoClient } = require('mongodb');
      const Db = "mongodb+srv://mithunkumarc:<password>@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";

      const client = new MongoClient(Db, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      var _db;

      module.exports = {
          connectToServer: function(callback) {
                // deprecation
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
      
conn.js using promise

        const { MongoClient } = require('mongodb');
        const Db = "mongodb+srv://mithunkumarc:mithu123@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";

        const client = new MongoClient(Db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        var _db;

        module.exports = {
            connectToServer: async function() {
                await client.connect();
                _db = client.db("sales");
                console.log("connected...");
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
