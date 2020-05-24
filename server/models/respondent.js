const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Should store pic in cloud and save just the link to picture
const RespondentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  primaryPhoneNumber: { type: Number },
  email: { type: String },
  agency: { type: Schema.Types.ObjectId, ref: 'agency' },
  verified: { type: Boolean, default: false }
});

RespondentSchema.statics.toggleVerify = function(id) {
  return this.findById(id).then(respondent => {
    respondent.verified = !respondent.verified;
    return respondent.save();
  });
};

const Respondent = mongoose.model('respondent', RespondentSchema);

module.exports = Respondent;
