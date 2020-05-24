const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');
const AgencyType = require('./agency_type');
const RespondentType = require('./respondent_type');
const HotelType = require('./hotel_type');
const Agency = require('../models/agency');
const Respondent = require('../models/respondent');
const Hotel = require('../models/hotel');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addAgency: {
      type: AgencyType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return new Agency({ name }).save();
      }
    },
    addRespondentToAgency: {
      type: AgencyType,
      args: {
        agencyName: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        primaryPhoneNumber: { type: GraphQLInt },
        email: { type: GraphQLString },
        verified: { type: GraphQLBoolean }
      },
      resolve(
        parentValue,
        {
          agencyName,
          firstName,
          lastName,
          address,
          city,
          state,
          primaryPhoneNumber,
          email,
          verified
        }
      ) {
        const respondentUserInfo = {
          firstName,
          lastName,
          address,
          city,
          state,
          primaryPhoneNumber,
          email,
          verified
        };
        return Agency.addRespondent(agencyName, respondentUserInfo);
      }
    },
    addHotel: {
      type: HotelType,
      args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        phoneNumber: { type: GraphQLInt },
        email: { type: GraphQLString },
        promoCode: { type: GraphQLString },
        image: { type: GraphQLString }
      },
      resolve(
        parentValue,
        {
          name,
          address,
          city,
          state,
          zipcode,
          phoneNumber,
          email,
          promoCode,
          image
        }
      ) {
        return new Hotel({
          name,
          address,
          city,
          state,
          zipcode,
          phoneNumber,
          email,
          promoCode,
          image
        }).save();
      }
    }
  })
});

module.exports = mutation;
