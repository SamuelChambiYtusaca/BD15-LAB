const express = require("express");
const router = express.Router();
const {create,list} = require("../controllers/controller.js")

router.post('/create',create)
router.get('/list',list)

module.exports = router;