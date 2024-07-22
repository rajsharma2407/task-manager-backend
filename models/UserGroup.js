const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGroupSchema = new Schema({
  userGroupId: { type: String, required: true},
  userEmail: { type: Schema.Types.String, ref: 'User' }
});

module.exports = mongoose.model('UserGroup', userGroupSchema);
