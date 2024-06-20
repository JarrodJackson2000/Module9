let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

router.get("/", (req, res) => {
  Controllers.postLikeController.getLikes(res);
});

router.post("/create", (req, res) => {
  Controllers.postLikeController.createLike(req.body, res);
});

router.delete("/:id", (req, res) => {
  Controllers.postLikeController.deleteLike(req, res);
});

module.exports = router;
