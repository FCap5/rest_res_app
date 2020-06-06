const path = require("path");
const router = require("express").Router();

//get api info for the tables
router.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

//get api info for the waitlist

//If no matching route is found default to home
