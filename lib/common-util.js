/**
 * Created by iSmile on 5/22/2017.
 */
const moment = require('moment');
const crypto = require('crypto');
const _ = require('lodash');

/*
* Returns the Current Date in the following format : mm/dd/yyyy
* */
const getDate = () => moment().format("DD/MM/YYYY");

/*
* Creates a HMAC encoded string
* */
const createHMac = (algorithm, text, key) => crypto.createHmac(algorithm, key).update(text).digest('hex');

/*
* Returns Difference between two JSON Objects
* */
const getDiffBetweenObj = (a, b) => _.reduce(a, (result, value, key) => _.isEqual(value, b[key]) ? result : result.concat(key), []);

module.exports = {
    getDate,
    createHMac,
    getDiffBetweenObj
};