var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "3dvVfQ6Wgqm3fK9s",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.err("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;