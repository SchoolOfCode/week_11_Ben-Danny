const express = require("express");
const morgan = require("morgan");
const cors = require ("cors")

const characterRouter = require("./routes/routes.js")
const movesRouter = require("./routes/routes.js")

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api", characterRouter);
// app.use("/api/moves", movesRouter);
//app.use("/api/songs", songsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});