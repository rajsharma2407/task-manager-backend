const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid library
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskId: { type: String, required: true, unique: true , default: uuidv4},
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  dueDate: { type: Date },
  column: { type: String, enum: ['todo', 'inProgress', 'done'] },
  taskGroupId: { type: Schema.Types.String, ref: 'TaskGroup' },
  createdByUserId: { type: Schema.Types.String, ref: 'User' }
}); 

module.exports = mongoose.model('Task', taskSchema);
