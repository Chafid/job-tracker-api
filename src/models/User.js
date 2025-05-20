const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//hash password
UserSchema.pre("save", async function () {
    if(!this.isModified("password")) return;
});

module.exports = mongoose.model("User", UserSchema);

