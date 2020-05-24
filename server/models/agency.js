const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgencySchema = Schema({
  name: { type: String },
  respondents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'respondent'
    }
  ]
});

AgencySchema.statics.addRespondent = function(agencyName, respondentUserInfo) {
  const Respondent = mongoose.model('respondent');
  return this.findOne({ name: agencyName })
    .then(agency => {
      console.log('AGENCY:', agency);
      respondentUserInfo.agency = agency;
      const respondent = new Respondent(respondentUserInfo);
      agency.respondents.push(respondent);
      return Promise.all([agency.save(), respondent.save()]).then(
        ([agency, respondent]) => agency
      );
    })
    .catch(err => {
      console.log('YOU HAVE AN ERROR IN AGENCY FILE');
      console.log(err);
    });
};

AgencySchema.statics.findRespondent = function(id) {
  return this.findById(id)
    .populate('respondents')
    .then(agency => agency.respondents);
};

const Agency = mongoose.model('agency', AgencySchema);

module.exports = Agency;
