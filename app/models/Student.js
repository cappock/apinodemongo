const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    grades: {
      type: String,
    },
  },
  {
    collection: "students",
  }
);
module.exports = mongoose.model("Student", Student);
