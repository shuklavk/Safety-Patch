const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');
const mongoose = require('mongoose');
// const AgencyType = require('./agency_type');
const Respondent = require('../models/respondent');

const RespondentType = new GraphQLObjectType({
  name: 'RespondentType',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    primaryPhoneNumber: { type: GraphQLInt },
    email: { type: GraphQLString },
    verified: { type: GraphQLBoolean },
    agency: {
      type: require('./agency_type'),
      resolve(parentValue) {
        return Respondent.findById(parentValue.id)
          .populate('agency')
          .then(respondent => {
            return respondent.song;
          });
      }
    }
  })
});

module.exports = RespondentType;
