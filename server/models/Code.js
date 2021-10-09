const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let codeSchema = new Schema(
  {
    code: {
      type: String,
    },
    university: {
      type: String,
    },
  },
  {
    collection: "code",
  }
);

module.exports = mongoose.model("code", codeSchema);
