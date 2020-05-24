const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require('graphql');

// const Hotel = require('../models/hotel');

const HotelType = new GraphQLObjectType({
  name: 'HotelType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    email: { type: GraphQLString },
    promoCode: { type: GraphQLString },
    image: { type: GraphQLString }
  })
});

module.exports = HotelType;
