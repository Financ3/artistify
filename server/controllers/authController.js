const bcrypt = require('bcryptjs')

module.exports = {
    login: async function(req, res) {
        const db = req.app.get("db");
        const {email, password} =req.body;
        try{
            const [verifiedUser] = await db.auth.get_user(email);
            if(!verifiedUser){
                res.status(403).send('There is no account matched with that email, maybe you need to register?');
            } 
            else {
                const isAuthenticated = bcrypt.compareSync(password, verifiedUser.hash)
            if(!isAuthenticated){
                res.status(403).send('Email or password does not match ');
            }
            else {
            
            delete verifiedUser.hash;

            req.session.user = verifiedUser;
            res.status(200).send(req.session.user);
            }}    
        } catch(err) {
                res.sendStatus(500)
        }
        }
}