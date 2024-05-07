// models/Reaction.js
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true },
  username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reaction', reactionSchema);
