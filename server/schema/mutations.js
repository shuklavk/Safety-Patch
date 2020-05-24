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
        profession: { type: GraphQLString },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        primaryPhoneNumber: { type: GraphQLInt },
        secondaryPhoneNumber: { type: GraphQLInt },
        email: { type: GraphQLString },
        idImage: { type: GraphQLString },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        verified: { type: GraphQLBoolean }
      },
      resolve(
        parentValue,
        {
          agencyName,
          firstName,
          lastName,
          profession,
          address,
          city,
          state,
          zipcode,
          primaryPhoneNumber,
          secondaryPhoneNumber,
          email,
          idImage,
          startDate,
          endDate,
          verified
        }
      ) {
        const respondentUserInfo = {
          firstName,
          lastName,
          profession,
          address,
          city,
          state,
          zipcode,
          primaryPhoneNumber,
          secondaryPhoneNumber,
          email,
          idImage,
          startDate,
          endDate,
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
        promoCode: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { name, address, city, state, zipcode, phoneNumber, email, promoCode }
      ) {
        return new Hotel({
          name,
          address,
          city,
          state,
          zipcode,
          phoneNumber,
          email,
          promoCode
        }).save();
      }
    }
  })
});

module.exports = mutation;
