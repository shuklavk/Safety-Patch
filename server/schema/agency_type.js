const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = require('graphql');
const mongoose = require('mongoose');
const RespondentType = require('./respondent_type');

const Agency = require('../models/agency');

const AgencyType = new GraphQLObjectType({
  name: 'AgencyType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    respondents: {
      type: new GraphQLList(RespondentType),
      resolve(parentValue) {
        return Agency.findRespondent(parentValue.id);
      }
    }
  })
});

module.exports = AgencyType;
