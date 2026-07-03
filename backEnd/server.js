const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sabzlearn = require("./db/sabzlearnDB");
const usersRoutes = require("./routes/usersRoutes");



const app=express();

app.use(bodyParser.json());
app.use(cors())


app.use("/api/users",usersRoutes);


app.listen(1255, () => {
  console.log(`Server is running on port ${1255}`);
});