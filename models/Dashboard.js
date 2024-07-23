const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid library
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  dashboardId: { type: String, required: true, unique: true, default: uuidv4 },
  name: { type: String, required: true },
  userGroupId: { type: Schema.Types.String, ref: 'UserGroup' }
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
