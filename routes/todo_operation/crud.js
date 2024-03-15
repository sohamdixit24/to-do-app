const express = require("express");
const router = express.Router();

router.get("/additem", async (req, res) => {
  const obj = {
    id: 1,
    content: "Hello, this is a first note",
  };
  res.send(obj);
});

router.get("/:id/removeitem", async (req, res) => {
  res.send(`You have removed item ${req.params["id"]}`);
});
module.exports = router;
