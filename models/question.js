const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  text: { type: String, required: true },
  op1: { type: String },
  op2: { type: String },
  op3: { type: String },
  op4: { type: String },
  numOp: { type: Number, required: true },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
