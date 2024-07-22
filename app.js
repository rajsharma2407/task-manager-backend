const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

require('dotenv').config();
// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
