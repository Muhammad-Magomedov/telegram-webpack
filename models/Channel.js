const mongoose = require("mongoose")

const Channel = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name:  {
    type: String,
    required: true
  },
  text:  {
    type: String,
    required: true
  },
  category: {id: mongoose.Types.ObjectId, ref: "Category"},

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Channel", Channel)