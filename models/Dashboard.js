const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  dashboardId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userGroupId: { type: Schema.Types.String, ref: 'UserGroup' }
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
