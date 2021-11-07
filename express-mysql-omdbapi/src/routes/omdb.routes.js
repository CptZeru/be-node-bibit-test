module.exports = app => {
    const { 
        searchOmdbController, 
        getDetailOmdbController 
    } = require("../controllers/omdb.controllers")

    const router = require("express").Router();
    
    router.get("/search", searchOmdbController);

    router.get("/detail", getDetailOmdbController);

    app.use('/api/movies', router);
}