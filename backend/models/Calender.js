const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
  userID: {
    type: Number,
    required: true
  },
  events: {
      type: Map,
      of: [new Schema ({
        title: {
          type: String
        },
        startTime: {
          type: Number,
          required: true
        },
        endTime: {
          type: Number,
          required: true
        },
        desc: {
          type: String
        },
        vendorID: {
          type: Number
        }
      })],
      required: true,
      default: new Map()
  }
});

module.exports = Calendar = mongoose.model("calendar", CalendarSchema);
