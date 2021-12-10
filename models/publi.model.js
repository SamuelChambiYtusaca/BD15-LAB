const mongoose = require("mongoose")

const publiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    
});

module.exports = mongoose.model("publi",publiSchema);