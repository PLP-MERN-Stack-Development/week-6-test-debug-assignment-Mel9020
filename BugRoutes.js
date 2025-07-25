// backend/routes/bugRoutes.js
const express = require('express');
const Bug = require('../models/Bug');
const router = express.Router();

router.post('/', async (req, res) => {
  const newBug = new Bug(req.body);
  const saved = await newBug.save();
  res.status(201).json(saved);
});

router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

router.put('/:id', async (req, res) => {
  const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
