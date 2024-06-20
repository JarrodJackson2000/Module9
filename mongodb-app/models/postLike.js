const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  postId: { type: Schema.Types.ObjectId, ref: "post" },
});
module.exports = mongoose.model("like", likeSchema);
