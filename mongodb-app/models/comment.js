const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  postId: { type: Schema.Types.ObjectId, ref: "post" },
  content: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comment", commentSchema);
