const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskGroupSchema = new Schema({
  taskGroupId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dashboardId: { type: Schema.Types.String, ref: 'Dashboard' }
});

module.exports = mongoose.model('TaskGroup', taskGroupSchema);
