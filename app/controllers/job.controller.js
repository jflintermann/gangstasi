const db = require("../models");
const Job = db.job;
const Op = db.Sequelize.Op;

// Create and Save a new job
exports.create = (req, res) => {
    if (!req.body.user_id) {
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

    // Create a job
    const job = {
        active: true,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        visible: true,
        userId: req.body.user_id
      };

    // Save job in the database
    Job.create(job)
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

// Retrieve all jobs from the database by userId
exports.findAll = (req, res) => {
  const user_id = req.query.user_id;
  var condition = user_id ? { user_id: user_id } : null;
  
  Job.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    });
};

// Find a single job with an id
exports.findOne = (req, res) => {
  
};

// Update a job by the id in the request
exports.update = (req, res) => {
  
};

// Delete a job by the id in the request
exports.delete = (req, res) => {
  
};

// Delete all jobs from the database.
exports.deleteAll = (req, res) => {
  
};