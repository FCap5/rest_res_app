const express = require("express");
const path = require("path");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tableData = [
  {
    name: "Ffej",
    email: "email.email@email.com",
    id: "someID",
    phoneNumber: "123-456-7890",
  },
];

const waitlistData = [
  {
    name: "Keith",
    email: "emai.email@email.com",
    id: "anotherID",
    phoneNumber: "098-765-4321",
  },
];

app.get("/api/tables", (req, res) => {
  res.json(tableData);
});

app.get("/api/waitlist", (req, res) => {
  res.json(waitlistData);
});

//function that adds data from reservation page to tableData array
//if table data array = 5, then it adds to waitlistData array
app.post("/api/tables", (req, res) => {
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json({
      reservation: true,
    });
  } else {
    waitlistData.push(req.body);
    res.json({
      reservation: false,
    });
  }
  res.json({
    param: "value",
  });
});

//add a clear button

//waitlist

//html
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "../restresapp/public/tables.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "../restresapp/public/reserve.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../restresapp/public/home.html"));
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
