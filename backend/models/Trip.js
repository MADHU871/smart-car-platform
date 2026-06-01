const mongoose =
require("mongoose");

const TripSchema =
new mongoose.Schema({

  from: String,

  to: String,

  distance: String,

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports =
mongoose.model(
  "Trip",
  TripSchema
);