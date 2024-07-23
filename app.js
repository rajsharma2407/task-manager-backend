const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
});

app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
