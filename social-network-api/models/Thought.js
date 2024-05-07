// models/Thought.js
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
});

module.exports = mongoose.model('Thought', thoughtSchema);
