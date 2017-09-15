/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('./lib/cloudant');
const commonUtil = require('./lib/common-util');
const mailer = require('./lib/mailer');
const mysql = require('./lib/mysql');

module.exports = { cloudant, commonUtil, mailer, mysql };