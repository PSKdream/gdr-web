const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let modelSchema = new Schema(
  {
    course: {
      type: String,
    },
    alternatives: {
      type: Array,
    },
    criteria: {
      type: Array,
    },
    criteria_matrix: {
      type: Object,
    },
    alternatives_matrix: {
      type: Object,
    },
    cr_selected: {
      type: Boolean,
    },
  },
  {
    collection: "model_log",
  }
);

module.exports = mongoose.model("model_log", modelSchema);
