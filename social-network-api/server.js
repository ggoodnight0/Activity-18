const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-network-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/thoughts', require('./routes/thoughtRoutes')); // Add this line
app.use('/api/reactions', require('./routes/reactionRoutes')); // Add this line

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
