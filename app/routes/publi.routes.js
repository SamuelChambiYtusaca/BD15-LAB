module.exports = app => {
    const publis = require("../controllers/publi.controller.js");
    var router = require("express").Router();
    router.post("/", publis.create);
    router.get("/", publis.findAll);
    app.use('/api/publicaciones', router);
  };