const db = require("../models");
const Job = db.job;
const Op = db.Sequelize.Op;

// Create and Save a new Job
exports.create = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({
          message: "Must be logged in!"
        });
        return;
    }
    if (!req.body.url) {
        res.status(400).send({
          message: "URL cannot be empty!"
        });
        return;
    }

    // Create a Job
    const job = {
        userId: req.body.userId,
        active: true,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        visible: true
      };

    // Save Job in the database
    Job.create(job)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Job."
        });
    });
};

// Retrieve all Jobs from the database by userId
exports.findAll = (req, res) => {
  
};

// Find a single Job with an id
exports.findOne = (req, res) => {
  
};

// Update a Job by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Job with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Jobs from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};