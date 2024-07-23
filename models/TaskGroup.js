const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid library
const Schema = mongoose.Schema;


const taskGroupSchema = new Schema({
  taskGroupId: { type: String, required: true, unique: true , default: uuidv4},
  name: { type: String, required: true },
  dashboardId: { type: Schema.Types.String, ref: 'Dashboard' }
});

module.exports = mongoose.model('TaskGroup', taskGroupSchema);
