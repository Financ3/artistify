const bcrypt = require('bcryptjs')

module.exports = {
    login: async function(req, res) {
        const db = req.app.get("db");
        const {email, password} =req.body;
        try {
            const [verifiedUser] = await db.auth.get_user(email);
            console.log(verifiedUser);
            if(!verifiedUser){
                res.status(403).send('There is no account matched with that email, maybe you need to register?');
            } 
            else {
                const isAuthenticated = bcrypt.compareSync(password, verifiedUser.password)
            if(!isAuthenticated){
                res.status(403).send('Email or password does not match ');
            }
            else {
            
            delete verifiedUser.password;

            req.session.user = verifiedUser;
            
            res.status(200).send(req.session.user);
            }}    
        } catch(err) {
                res.send("Error logging in - " + err).status(500)
        }
    },
    logout: async function (req, res) {
        req.session.destroy();
        res.status(200).send(req.session);
    }
}