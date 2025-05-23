const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req, res) => {
    const{email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: 'User already exist'});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); //hash password

        const user = new User({
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({message: 'User registered successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }

};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    // Find the user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid user' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    console.log ("Login successful");
    res.json({token});
}
