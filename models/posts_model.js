const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  owner: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("Post", postSchema);

module.exports = PostModel;