module.exports = {
    addSubscriber: async function(req, res) {
        const db = req.app.get('db');
        
        const {email} = req.body;

        const newSubscriber = await db.subscribers.add_subscriber(email);

        res.status(200).send(newSubscriber);
    }
}