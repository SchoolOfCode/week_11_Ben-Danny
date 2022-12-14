const { query } = require("../db/index.js");

async function getCharacters() {
    // Query the database and return all books
    const result = await query("SELECT * FROM characters;")
    const charArray = result.rows;
    return charArray;
  }

  async function getMoves() {
    // Query the database and return all books
    const result = await query("SELECT * FROM moves;")
    const movesArray = result.rows;
    return movesArray;
  }

/////down
  async function createData(data) {
    const result = await query (`INSERT INTO characters ( name) VALUES ($1)`,[data.name])//.name, newArtists.date_of_birth])
    return result;
   }
/////up
  module.exports = {
    getCharacters,
    getMoves,
    createData ////////
  }