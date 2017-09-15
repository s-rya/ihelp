/**
 * Created by iSmile on 015, 15/9/17.
 */

const mysql = require('mysql');
const {mySql: sqlConfig} = require('../config/config');

const mysql_connection = mysql.createConnection(sqlConfig);

//Connect to the MySQL server
mysql_connection.connect(err => {
    if (err) {
        console.log("Error in connecting to MySQL");
    } else {
        console.log("MySQL Connected !!!");
    }
});


/* Function to execute MySQL Query */
const query = query => {
    return new Promise((resolve, reject) => {
        mysql_connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

/* Function to execute MySQL Bulk queries */
const bulkQuery = (query, values) => {
    return new Promise((resolve, reject) => {
        mysql_connection.query(query, [values], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { query, bulkQuery };