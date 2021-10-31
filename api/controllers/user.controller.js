const db = require("../index.js");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Name cannot be empty!",
          request: req.body
        });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
          message: "Password cannot be empty!"
        });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({
          message: "Email cannot be empty!"
        });
        return;
    }

    // Create a new user
    const user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        session: req.body.session,
        visible: true
      };

    // Save user in database
    User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the job."
        });
    });
};

// Retrieve all users from the database
exports.findAll = (req, res) => {

};

// Find a single user with an id
exports.findOne = (req, res) => {

};

// Update a user by the id in the request
exports.update = (req, res) => {

};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all users from the database.
exports.deleteAll = (req, res) => {

};