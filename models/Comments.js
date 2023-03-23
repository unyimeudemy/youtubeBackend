import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    videoID: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
