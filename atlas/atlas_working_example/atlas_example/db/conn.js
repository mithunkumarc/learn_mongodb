const { MongoClient } = require('mongodb');
const Db = "mongodb+srv://mithunkumarc:mithu123@cluster0.xhkz2jc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;
let _collection;

module.exports = {
    connectToServer: async function() {
        await client.connect();
        _db = client.db("mongodbVSCodePlaygroundDB");
        _collection = _db.collection('sales');
    },
    getDb: function() {
        return _collection;
    }
}