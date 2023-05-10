var mysql = require("mysql")

var db = mysql.createPool({
    host: '192.168.0.107',
    user: 'img',         
    password: 'Mcmef411',     
    database: 'img',
    connectionLimit: 20
});

module.exports = db