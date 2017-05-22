/**
 * Created by iSmile on 5/22/2017.
 */
const moment = require('moment');
/*
* Returns the Current Date in the following format : mm/dd/yyyy
* */
const getDate = () => moment().format("DD/MM/YYYY");

module.exports = {
    getDate: getDate
};