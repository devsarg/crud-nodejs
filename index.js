const express = require('express')
const path = require("path");
const app = express()
const sqlite3 = require("sqlite3").verbose();

const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

app.listen(3000, ()=>{
    console.log('server has been started http://localhost:3000 !')
});

app.get("/", (req, res) => {
    res.render("index");
  });

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/data", (req, res) => {
    const test = {
      title: "Test",
      items: ["one", "two", "three"]
    };
    res.render("data", { model: test });
  });

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "public")));