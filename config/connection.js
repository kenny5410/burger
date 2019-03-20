require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_Port,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;