const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { buyAsset, sellAsset, tradeHistory } = require("../controllers/tradeController");

router.post("/buy", auth, buyAsset);
router.post("/sell", auth, sellAsset);
router.get("/history", auth, tradeHistory);

module.exports = router;
