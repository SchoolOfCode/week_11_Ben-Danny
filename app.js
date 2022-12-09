const express = require("express");
const morgan = require("morgan");
const cors = require ("cors")

const characterRouter = require("./routes/routes.js")
//const songsRouter = require("./routes/songs.js")

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/character", characterRouter);
//app.use("/api/songs", songsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});