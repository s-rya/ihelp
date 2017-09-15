/**
 * Created by iSmile on 015, 15/9/17.
 */
const mysql = require('../lib/mysql');

mysql.query(`SELECT * FROM PROBLEM`)
    .then(console.log)
    .catch(console.log);