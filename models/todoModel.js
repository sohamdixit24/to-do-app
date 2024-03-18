const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.UUID,
  content: {required: true, type: String },
});

module.exports = mongoose.model("ToDo", todoSchema);
