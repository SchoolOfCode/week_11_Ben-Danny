const express = require("express");
const router = express.Router();

const {getCharacters, createData, getMoves} = require("../models/models.js")/////////

router.get("/character", async function (req, res) {
  console.log("got to characters")
    const result = await getCharacters();
    res.json({ success: true, payload: result });
  });

  router.get("/moves", async function (req, res) {
    console.log("got to moves")
    const result = await getMoves();
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