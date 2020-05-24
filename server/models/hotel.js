const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = Schema({
  name: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  phoneNumber: { type: Number },
  email: { type: String },
  promoCode: { type: String },
  image: { type: String }
});

const Hotel = mongoose.model('hotel', HotelSchema);
module.exports = Hotel;
