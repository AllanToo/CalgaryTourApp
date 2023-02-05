// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

// const mongoUrl =
//   "mongodb+srv://test:qwer1234@cluster0.z5w9phf.mongodb.net/GuideGo?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// require("./Hosts");

// const HostsData = mongoose.model("Hosts");

// app.get("/hosts", async (req, res) => {
//   try {
//     HostsData.find()
//       .then((data) => {
//         res.send({ status: "ok", data: data });
//       })
//       .catch((error) => {
//         res.send({ status: "error", data: error });
//       });
//   } catch (error) {}
// });

// app.listen(3001, () => {
//   console.log("Server Started");
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
const bodyParser = require("body-parser");

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
