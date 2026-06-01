const mongoose =
require("mongoose");

const GPSSchema =
new mongoose.Schema({

  latitude: String,

  longitude: String,

  location: String

});

module.exports =
mongoose.model(
  "GPS",
  GPSSchema
);