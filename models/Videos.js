import mongoose from "mongoose";

const VideoSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    describtion: {
      type: String,
      require: true,
    },
    videoUrl: {
      type: String,
      require: true,
    },
    ImageUrl: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
