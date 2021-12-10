const db = require("../models");
const publi = db.publi;

exports.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({ message: "No puede enviar un JSON vacio!" });
      return;
    }
  
    const publica = new publi({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    publica.save(publica)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al crear la publicacion."
        });
      });
  };

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    publi.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al leer las publicaciones."
        });
      });
  };

