import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      //   require: true,
      //   select: false,
    },

    image: {
      type: String,
    },

    fromGoogle: {
      type: Boolean,
      default: false,
    },

    //my subscribers
    subcribers: {
      type: Number,
      default: 0,
    },

    //channels i have subscribed to (subscribedUser)
    subscribedChannels: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
