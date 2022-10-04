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
                const Db = "mongodb+srv://mithunkumarc:<your_password>@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";

                const client = new MongoClient(Db, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });

                let _db;
                let _collection;

                module.exports = {
                    connectToServer: async function() {
                        await client.connect();
                        _db = client.db("mongodbVSCodePlaygroundDB"); // check db name in atlas
                        _collection = _db.collection('sales');
                    },
                    getDb: function() {
                        return _collection;
                    }
                }
      
      
server.js

            const express = require('express');
            const app = express();
            const cors = require('cors');

            const port = process.env.PORT || 5000;

            app.use(cors());
            app.use(express.json());
            app.use(require("./routes/record"));

            const dbo = require('./db/conn.js');
            app.listen(port, async () => {
                await dbo.connectToServer(function (err) {
                    if(err) console.error(err);
                });
                console.log(`server listening on port ${port}`);
            });
