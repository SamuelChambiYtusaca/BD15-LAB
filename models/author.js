const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true,
    },
    surnames: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: "Es necesario un e-mail válido para registrarse",
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        unique: [true, "Este e-mail ya está registrado"],
    },
});

module.exports = mongoose.model("author",authSchema);