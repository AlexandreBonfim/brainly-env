
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require('path');
const cors = require('cors');

const db_name = path.join(__dirname, "Chinook_Sqlite_AutoIncrementPKs.sqlite");

const db = new sqlite3.Database(db_name, err => {
  if (err) {
    console.log(db_name);
    return console.error(err.message);
  }
  console.log("Successful connection to the database");
});

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => {
  const limit = req.query.limit;
  let sql = "SELECT * FROM Customer";
  db.all(sql, [], (err, rows) => {
    res.send(rows);
  });
});
