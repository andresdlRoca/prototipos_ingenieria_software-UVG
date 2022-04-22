const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ type: "*/*" }));

app.get("/", (req, res) => {
  console.log(":)");
  res.json("Hila");
});

app.get("/register", (req, res) => {
  res.send("Hola");
});

app.post("/register", (req, res) => {
  console.log(req.body.text1);
  console.log(req.body.text2);
  console.log(req.body.text3);
  console.log(req.body.text4);
  if (req.body.text1.trim() !== "") {
    res.status(500).send({ error: "field empty" });
  } else {
    res.status(200).send(req.body);
  }
});

app.listen(8080, () => console.log("Server started"));
