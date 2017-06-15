/**
 * Created by iSmile on 6/15/2017.
 */
const mailer = require('../lib/mailer');

mailer.sendMail('surya.nerist@gmail.com', 'TEST Msg', 'This is a test message')
    .then(console.log).catch(console.log);