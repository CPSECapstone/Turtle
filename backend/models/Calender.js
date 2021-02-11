const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
  events: {
      type: Map,
      required: true,
      default: new Map()
  }
});

module.exports = Calendar = mongoose.model("calendar", CalendarSchema);