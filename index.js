/**
 * Created by iSmile on 5/10/2017.
 */
const cloudant = require('./lib/cloudant');
const commonUtil = require('./lib/common-util');
const mailer = require('./lib/mailer');

module.exports = {
    cloudant: cloudant,
    commonUtil: commonUtil,
    mailer: mailer
};