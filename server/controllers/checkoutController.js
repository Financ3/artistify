const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const {STRIPE_KEY_SECRET} = process.env;
const stripe = require('stripe')(STRIPE_KEY_SECRET);
const uuid = require('react-uuid');
const nodemailer = require ('nodemailer');

module.exports = {
    checkout: async function(req, res) {

        try{
            const {token, cart, totalCharge} = req.body;

            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });
            const idempotencyKey = uuid();
            await stripe.charges.create({
                amount: totalCharge * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchase of ${cart.length} prints from an artist's online gallery`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.adress_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotencyKey
            });
            //set up nodemailer
            const {GMAIL_USERNAME, GMAIL_PASSWORD} = process.env;
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:  {
                    user: GMAIL_USERNAME,
                    pass: GMAIL_PASSWORD
                }
            });
            //create message for the customer
            let mailOptions1 = {
                from: GMAIL_USERNAME,
                to: token.email,
                subject: 'Purchase from artist\'s online gallery',
                text: 'Thanks for making a purchase from the online gallery! The artist has been notified of your purchase and it will be fulfilled shortly.'
            }
            //create message for the artist
            let mailOptions2 = {
                from: GMAIL_USERNAME,
                to: 'tanner.francis11@gmail.com',
                subject: 'Purchase made from your online gallery',
                text: 'You have received an order from your online gallery. Details are below: \n\n Details'
            }
            //send email to the customer informing of the success
            transporter.sendMail(mailOptions1, (err) => {
                if (err) {
                    console.log("Error Occured: ", err);
                    //respond with a successful status but a warning message
                    res.status(200).send({
                        status: "success with warnings",
                        message: "Checkout was successful but email to customer failed, email to artist was not sent."})
                } else {
                    console.log('Customer email sent!');
                }
            });
            //send email to the artist informing them of the purchase
            transporter.sendMail(mailOptions2, (err) => {
                if (err) {
                    console.log("Error Occurred: ", err);
                    //respond with a successful status but a warning message
                    res.status(200).send({
                        status: "success with warnings",
                        message: "Checkout was successful and email to customer was sent. Email to artist was not sent."})
                } else {
                    console.log('Artist email sent!');
                }
            });
            res.status(200).send({
                        status: "success",
                        message: "Checkout was successful\nEmail to customer was successful\nEmail to artist was successful"
                    })
        } 
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
        
    }
}