const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
      required: true,
    },
    report: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "userinfo",
  }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.statics.createUser = function (payload) {
  const user = new this(payload);
  return user.save();
};
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};
userSchema.statics.findByUserId = function (userId) {
  return this.findOne({ _id: userId });
};
userSchema.statics.findByUserId = function (userId) {
  return this.findOne({ _id: userId });
};
userSchema.statics.updateUserByUserId = function (userId, payload) {
  return this.findOneAndUpdate({ _id: userId }, payload, { new: true });
};
userSchema.statics.deleteUserByUserId = function (userId) {
  return this.deleteOne({ _id: userId });
};

module.exports = mongoose.model("User", userSchema, "userinfo");
