module.exports = {
    //GET getAllArt (gets all art objects from the DB and returns them in an array)
    getArt: async function(req, res) {
        const db = req.app.get('db');
        try {
            let allArt = await db.artworks.get_all_art();
            res.status(200).send(allArt);
        } catch (err) {
            res.status(500).send(err);
        }
        
        
    },
    createArt: async function(req, res) {
        //POST createArt (creates a new art object and inserts it into the DB)
        //data in the body should include title, description, media, smallPrice, medPrice, largePrice. The SQL call requires that they be given as parameters IN THAT ORDER.
        const db = req.app.get('db');

        const {title, description, media, smallPrice, medPrice, largePrice, featured} = req.body;

        const [addedArt] = await db.artworks.create_art(title, description, media, smallPrice, medPrice, largePrice, featured);

        res.status(200).send(addedArt);
    },
    updateArt: async function(req, res) {
        //PUT editArt (replaces an old art object in the DB with a new one)
        //data in the body should include id, title, description, media, smallPrice, medPrice, largePrice. The SQL call requires that they be given as parameters IN THAT ORDER.
        const db = req.app.get('db');

        const {id, title, description, media, smallPrice, medPrice, largePrice, featured} = req.body;

        const [updatedArt] = await db.artworks.update_art(id, title, description, media, smallPrice, medPrice, largePrice, featured);

        res.status(200).send(updatedArt);
    },
    deleteArt: async function(req, res) {
        //DELETE deleteArt (removes an art object from the DB)
        //all we need is an ID - let's get it from the params
        const db = req.app.get('db');

        const {id} = req.params;

        await db.artworks.delete_art(id);

        res.sendStatus(200);
    },
    getSingleArt: async function(req, res) {
        //GET singleArt (retrieves a single artwork object from the databased). An ID will be sent as a parameter.
        const db = req.app.get('db');

        const {id} = req.params;

        const [singleArt] = await db.artworks.get_single_art(id);

        res.status(200).send(singleArt);
    }
}
