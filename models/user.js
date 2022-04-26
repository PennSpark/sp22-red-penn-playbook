const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  email: { type: String, required: true },
  ans1: { type: String},
  ans2: { type: String},
  ans3: { type: String},
  ans4: { type: String},
  ans5: { type: String},
  ans6: { type: String},
  ans7: { type: String},
  ans8: { type: String},
  ans9: { type: String},
  ans10: { type: String},
  ans11: { type: String},
  ans12: { type: String},
  ans13: { type: String},
  ans14: { type: String},
  ans15: { type: String},
})

const User = model('User', userSchema)

module.exports = User
