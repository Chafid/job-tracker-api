const mongoose = require ("mongoose");

const ApplicationSchema = new mongoose.Schema({
    position: String,
    company: String,
    status: {type: String, default: "applied"},
    notes: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
}, {timestamps: true});

module.exports = mongoose.model("Application", ApplicationSchema);
