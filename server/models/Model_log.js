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
    code_submit:{
      type: String,
    }
  },
  {
    collection: "model_log",
    timestamps: true
  }
);

module.exports = mongoose.model("model_log", modelSchema);
