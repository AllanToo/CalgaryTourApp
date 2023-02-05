const express = require("express");
const Host = require("./Host");
const router = express.Router();

//ROUTES
router.get("/", async (req, res) => {
  try {
    const hosts = await Host.find();
    res.json(hosts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const host = new Host({
    host_id: req.body.host_id,
    fname: req.body.fname,
    lname: req.body.lname,
  });

  console.log(host);

  try {
    const savedHost = await host.save();
    res.json(savedHost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
