const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  controllers.bankController.getBanks(req, res);
});

router.get("/:id", (req, res) => {
  controllers.bankController.getBanksId(req, res);
});

module.exports = router;
