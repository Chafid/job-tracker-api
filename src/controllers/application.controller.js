const Application = require("../models/Application");

exports.getApplications = async (req, res) => {
    const apps = await Application.find({ user: req.user });
    res.json(apps);
};

exports.createApplication = async (req, res) => {
    const app = await Application.create({ ...req.body, user: req.user });
    res.status(201).json(app);
};