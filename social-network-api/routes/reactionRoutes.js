// reactionRoutes.js
const express = require('express');
const router = express.Router();
const Reaction = require('../models/Reaction');

// Get all reactions
router.get('/', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new reaction
router.post('/', async (req, res) => {
  // Create logic
});

// Delete a reaction
router.delete('/:id', async (req, res) => {
  // Delete logic
});

module.exports = router;
