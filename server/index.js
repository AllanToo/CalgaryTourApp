const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

//import routes
const getsRoute = require("./Get");

app.use("", getsRoute);

//Connect to DB
mongoose.connect(
  "mongodb+srv://root:newpassword@cluster1.r6doziu.mongodb.net/yychacks",
  { useNewUrlParser: true },
  () => console.log("Connected to DB")
);

//Starts Listening
app.listen(3001);
