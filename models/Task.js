const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  dueDate: { type: Date },
  column: { type: String, enum: ['todo', 'in-progress', 'done'] },
  taskGroupId: { type: Schema.Types.String, ref: 'TaskGroup' },
  createdByUserId: { type: Schema.Types.String, ref: 'User' }
}); 

module.exports = mongoose.model('Task', taskSchema);
