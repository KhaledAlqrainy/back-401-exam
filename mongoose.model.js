'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const FlowerSchema = new mongoose.Schema({
    instructions: String,
    photo: String,
    name: String
  });

  const FlowersDataModel = mongoose.model('color', FlowerSchema);

  module.exports=FlowersDataModel