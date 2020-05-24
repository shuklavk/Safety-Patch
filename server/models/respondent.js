const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Should store pic in cloud and save just the link to picture
const RespondentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  profession: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  primaryPhoneNumber: { type: Number },
  secondaryPhoneNumber: { type: Number },
  email: { type: String },
  agency: { type: Schema.Types.ObjectId, ref: 'agency' },
  idImage: { type: String },
  startDate: { type: String },
  endDate: { type: String },
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
