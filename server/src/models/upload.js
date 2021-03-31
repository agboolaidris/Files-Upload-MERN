const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    pathname: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = Upload = model("Upload", schema);
