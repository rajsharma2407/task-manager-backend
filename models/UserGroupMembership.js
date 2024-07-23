const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 
const Schema = mongoose.Schema;

const userGroupMembershipsSchema = new Schema({
  userGroupMembershipId: { type: String, required: true, unique: true, default: uuidv4 },
  userEmail: { type: Schema.Types.String, ref: 'User' },
  userGroupId: { type: Schema.Types.String, ref: 'UserGroup' }
});

module.exports = mongoose.model('UserGroupMemberships', userGroupMembershipsSchema);
