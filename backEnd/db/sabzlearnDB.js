const mysql=require("mysql")
const sabzlearnDB=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"sabzlearn"
})

sabzlearnDB.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("MySQL Connected");
});


module.exports=sabzlearnDB; 