const comment = require("../../mongodb-app/models/comment");

module.exports = {
  userController: require("./userController"),
  postController: require("./postController"),
  likeController: require("./likeController"),
  commentController: require("./commentController"),
  bankController: require("./bankController"),
};
