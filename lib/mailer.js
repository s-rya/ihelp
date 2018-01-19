/**
 * Created by iSmile on 6/15/2017.
 */
const nodemailer = require('nodemailer');
const config = require('./../config/config');

/*
 * This method send mail using GMail SMTP
 *
 * @param to {String} - Recipient Email address
 * @param subject {String} - Subject of the mail
 * @param text {String} - Body of the email
 * */
const sendMail = (to, subject, text, mailConfig=config.mail) => {

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(mailConfig);

    // Message object
    let message = {
        to: to, // Comma separated list of recipients
        subject: subject, // Subject of the message
        text: text // plaintext body
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