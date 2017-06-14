/**
 * Created by iSmile on 5/22/2017.
 */
const moment = require('moment');
const crypto = require('crypto');

/*
* Returns the Current Date in the following format : mm/dd/yyyy
* */
const getDate = () => moment().format("DD/MM/YYYY");

/*
* Creates a HMAC encoded string
* */
const createHMac = (algorithm, text, key) => crypto.createHmac(algorithm, key).update(text).digest('hex');

module.exports = {
    getDate: getDate,
    createHMac: createHMac
};