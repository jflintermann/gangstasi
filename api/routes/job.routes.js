module.exports = app => {
    const job = require("../controllers/job.controller.js");
  
    var router = require("express").Router();
  
    // Create a new job
    router.post("/", job.create);
  
    // Retrieve all jobs
    router.get("/", job.findAll);
  
    // Retrieve a single job with id
    router.get("/:id", job.findOne);
  
    // Update a job with id
    router.put("/:id", job.update);
  
    // Delete a job with id
    router.delete("/:id", job.delete);
  
    // Delete all jobs
    router.delete("/", job.deleteAll);
  
    app.use('/jobs', router);
  };