const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST (create) a job
router.post("/", async (req, res) => {
  const { title, company, category, location, description } = req.body;

  try {
    const newJob = new Job({
      title,
      company,
      category,
      location,
      description,
    });

    const job = await newJob.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

