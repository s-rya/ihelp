/**
 * Created by iSmile on 5/22/2017.
 */
const commonUtil = require('../lib/common-util');

let date = commonUtil.getDate();
console.log(date);

let encodedString = commonUtil.createHMac('sha1','iSmile','myKey');
console.log(encodedString);