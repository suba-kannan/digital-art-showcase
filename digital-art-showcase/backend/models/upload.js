const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String, // Stores the base64 string or image path
    required: true,
  },
});

const imagemodel = mongoose.model("image", imageSchema);
module.exports = imagemodel;
