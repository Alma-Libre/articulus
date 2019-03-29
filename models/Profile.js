const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating Schema

const UserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  website: {
    type: String
  },
  social_media: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", UserSchema);
