const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const { mongodbaddress } = "localhost";

app.use(cors());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  { mongodbaddress },
  {
    useNewUrlParser: true,
  }
);

if (process.env.NODE_ENV !== "production") {
  const mDb = mongoose.connection;
  mDb.on("open", () => {
    console.log("MongoDB is connected");
  });
  mDb.on("error", (error) => {
    console.log(error);
  });
}
