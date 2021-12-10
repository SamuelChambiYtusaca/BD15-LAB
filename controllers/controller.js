const Pub = require("../models/publi.model");

exports.create = (req, res) => {
    const nuevo = new Pub(req.body);
    nuevo.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(result);
    });
  };


exports.list = (req, res) => {
    Pub.find()
    .exec((err, publi) => {
        if (err) {
          return res.status(400).json({
            error: "Posts no encontrados",
          });
        }
        res.json(publi);
    });
}