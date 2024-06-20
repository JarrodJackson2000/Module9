const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  title: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);
// The "user" mentioned in the above line should be in
// lowercase singular form ..whereas the actual collection
// name in mongodb will be in the plural form.
// Refer to mongoose documentation for more:https://www.npmjs.com/package/mongoose
// The first argument is the singular name of your collection.
// Mongoose automatically looks for the lowercase pluralversion. For example, if you use
// const MyModel = mongoose.model('Ticket', mySchema);
// Then MyModel will use the tickets collection, not the Ticketcollection.
