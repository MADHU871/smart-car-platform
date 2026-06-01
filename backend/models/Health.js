const mongoose =
require("mongoose");

const HealthSchema =
new mongoose.Schema({

  engine: String,

  battery: String,

  tires: String

});

module.exports =
mongoose.model(
  "Health",
  HealthSchema
);