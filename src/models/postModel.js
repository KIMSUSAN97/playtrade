const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "userinfo",
  }
);

module.exports = mongoose.model("Post", postSchema, "post");
