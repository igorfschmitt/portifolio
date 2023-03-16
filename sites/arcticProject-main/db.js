const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "aluno@ifsc",
    database: "arctic"
});

module.exports = db;