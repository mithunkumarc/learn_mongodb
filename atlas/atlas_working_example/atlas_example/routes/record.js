const express = require("express");
const recordRoutes = express.Router();
const dbConnection = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(async function(req, res) {
    let dbCollection = dbConnection.getDb();
    const findResult = await dbCollection.find({}).toArray();
    res.json(findResult)
})

module.exports = recordRoutes;