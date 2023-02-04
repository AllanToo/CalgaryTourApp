const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const { mongodbaddress } = "localhost";

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://root:passwordpassword@cluster1.r6doziu.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const db = client.db("test");
  console.log("Connected to MongoDB successfully");
  client.close();
});

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
