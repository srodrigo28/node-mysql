const mysql = require('mysql2/promise')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crud_react'
})