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