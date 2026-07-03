const express = require("express");
const sabzlearnDB = require("../db/sabzlearnDB");
const usersRoutes = express.Router();
usersRoutes.post("/", (req, res) => {
  const body = req.body;

  
      const date = new Date().toLocaleDateString("fa-IR");
      let newUserQuery = `INSERT INTO users (fristname, lastname,username, password, CREATED_AT) VALUES ('${body.fristname}','${body.lastname}','${body.username}','${body.password}','${date}')`;

      sabzlearnDB.query(newUserQuery, (error, result) => {
        if (error) {
          console.log("insert user faild");
          res.status(401).json({
            message:error
          })
        } else {
            res.status(200).json({
                message:"user added"
            })
          console.log("1 user added");
        }
      });
    

});

module.exports = usersRoutes;
