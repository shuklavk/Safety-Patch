const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const AgencyType = require('./agency_type');
const HotelType = require('./hotel_type');
const RespondentType = require('./respondent_type');
const Agency = require('../models/agency');
const Hotel = require('../models/hotel');
const Respondent = require('../models/respondent');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    agencies: {
      type: new GraphQLList(AgencyType),
      resolve() {
        return Agency.find({});
      }
    },
    hotels: {
      type: new GraphQLList(HotelType),
      resolve() {
        return Hotel.find({});
      }
    },
    respondents: {
      type: new GraphQLList(RespondentType),
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Agency.findRespondent(id);
      }
    },
    hotel: {
      type: HotelType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Hotel.findById(id);
      }
    },
    respondent: {
      type: RespondentType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Respondent.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
