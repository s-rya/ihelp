/**
 * Created by iSmile on 6/15/2017.
 */
const nodemailer = require('nodemailer');
const config = require('./../config/config');

// Create a SMTP transporter object
let transporter = nodemailer.createTransport(config.mail);

console.log('SMTP Configured');

const sendMail = (to, subject, text) => {
    // Message object
    let message = {

        // Comma separated list of recipients
        to: to,

        // Subject of the message
        subject: subject,

        // plaintext body
        text: text
    };

    console.log('Sending Mail');
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                resolve('');
            } else {
                console.log('Message sent successfully!');
                console.log('Server responded with "%s"', info.response);
                resolve('success');
            }
            transporter.close();
        });
    });
};

module.exports = {
    sendMail: sendMail
};