const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

//Virtuals
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = bcrypt.genSaltSync(10);
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

//Methods
userSchema.methods = {
  authenticate: async function (plainText) {
    try {
      return await bcrypt.compare(plainText, this.hashed_password);
    } catch (err) {
      return false;
    }
  },

  encryptPassword: function (password) {
    if (!password) return "";
    return bcrypt.hashSync(password, this.salt);
  },

  makeSalt: function () {
    return bcrypt.genSaltSync(10);
  },
};

module.exports = mongoose.model("User", userSchema);
