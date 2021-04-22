const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const nodemailer = require ('nodemailer');

module.exports = {
    addSubscriber: async function(req, res) {
        const db = req.app.get('db');
        
        const {email} = req.body;
        try {
            const newSubscriber = await db.subscribers.add_subscriber(email);

            //set up nodemailer
            const {GMAIL_USERNAME, GMAIL_PASSWORD} = process.env;
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:  {
                    user: GMAIL_USERNAME,
                    pass: GMAIL_PASSWORD
                }
            });
            //create message for the subscriber
            let mailOptions = {
                from: GMAIL_USERNAME,
                to: email,
                subject: 'Subscription to Artist\s Mailing List',
                text: 'Thanks for subscribing to the artist\'s mailing list!'
            }
            //send email to the customer informing of the success
            transporter.sendMail(mailOptions, (err) => {
                if (err) {
                    console.log("Error Occured: ", err);
                    //respond with a successful status but a warning message
                    res.status(200).send({
                        status: "success with warnings",
                        message: "Subscriber was added but the confirmation email was not sent."})
                } else {
                    console.log('Customer email sent!');
                    res.status(200).send(newSubscriber);
                }
            });
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    },
    contactArtist: async function(req, res) {
        const {GMAIL_USERNAME, GMAIL_PASSWORD} = process.env;
        const {email, text} = req.body;
        //SETUP nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:  {
                user: GMAIL_USERNAME,
                pass: GMAIL_PASSWORD
            }
        });
        //create message to send to artist
        let mailOptions = {
            from: email,
            to: GMAIL_USERNAME,
            subject: 'Contact/Commission request from your online gallery',
            text: text
        }
        //send the email
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.log("Error Occured: ", err);
                //respond with a successful status but a warning message
                res.status(500).send(err);
            }
            else {
                console.log('Email sent!');
                res.sendStatus(200);
            }
        });
    }
}