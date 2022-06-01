const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'employee_tracker'
    },
    console.log('Connected to db.')
);

module.exports = db;