const express = require("express");
const router = express.Router();

const {getCharacters, createData} = require("../models/models.js")/////////

router.get("/", async function (req, res) {
    const result = await getCharacters();
    res.json({ success: true, payload: result });
  });
//////////down
  router.post("/", async function (req, res) {
    const data = req.body;
    console.log(data)
    const result = await createData(data);
    res.json({ success: true, payload: result });
  });
////////up
//////// another post for description
  module.exports = router;