const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const massive = require('massive');
const session = require('express-session');
const express = require('express');
const artController = require('./controllers/artController');
const subController = require('./controllers/subController');
const checkController = require('./controllers/checkoutController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 525600
    }
}))

//authorization endpoints
    //POST login (checks the username and password against the DB and creates a session)

    //POST logout (destroys the session)

//Artwork endpoints
    //GET getAllArt (gets all art objects from the DB and returns them in an array)
    app.get('/api/artworks', artController.getArt);

    //POST createArt (creates a new art object and inserts it into the DB)
    app.post('/api/artworks', artController.createArt);

    //PUT editArt (replaces an old art object in the DB with a new one)
    app.put('/api/artworks', artController.updateArt);

    //DELETE deleteArt (removes an art object from the DB)
    app.delete('/api/artworks/:id', artController.deleteArt);

    //GET getSingleArt - returns a single art object from a paramter id
    app.get('/api/artworks/:id', artController.getSingleArt);

//Subscriber endpoints
    //add new subscriber
    app.post('/api/subscribers/', subController.addSubscriber);

    //send message to artist
    app.post('/api/contact', subController.contactArtist);

//Checkout endpoint
    //checkout a cart
    app.post("/api/checkout", checkController.checkout);

    app.use(express.static(__dirname + '/../build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'))
    });


//establish the database connection and start the server
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}, {scripts: path.join(__dirname, '../db')})
.then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => {
        console.log(`Server running on port ${SERVER_PORT}`)
    });
}).catch(err=>console.log(err));