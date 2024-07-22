const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGroupMembershipsSchema = new Schema({
  userGroupMembershipId: { type: String, required: true, unique: true },
  userEmail: { type: Schema.Types.String, ref: 'User' },
  userGroupId: { type: Schema.Types.String, ref: 'UserGroup' }
});

module.exports = mongoose.model('UserGroupMemberships', userGroupMembershipsSchema);
