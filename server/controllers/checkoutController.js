const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const {STRIPE_KEY_SECRET} = process.env;
const stripe = require('stripe')(STRIPE_KEY_SECRET);
const uuid = require('react-uuid');

module.exports = {
    checkout: async function(req, res) {

        try{
            const {token, cart, totalCharge} = req.body;

            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });

            const idempotencyKey = uuid();
            const charge = await stripe.charges.create({
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
            res.sendStatus(200);
        } 
        catch (err) {
            res.status(500).send(err);
        }
        
    }
}