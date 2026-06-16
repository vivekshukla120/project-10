const Trade = require("../config/models/Trade");
const Portfolio = require("../config/models/Portfolio");

exports.buyAsset = async (req, res) => {
  try {
    const { symbol, quantity, price } = req.body;

    await Trade.create({
      user: req.user,
      symbol,
      quantity,
      price,
      type: "BUY",
    });

    let asset = await Portfolio.findOne({ user: req.user, symbol });

    if (asset) {
      asset.quantity += quantity;
      await asset.save();
    } else {
      await Portfolio.create({ user: req.user, symbol, quantity });
    }

    res.json({ message: "Buy order successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sellAsset = async (req, res) => {
  try {
    const { symbol, quantity, price } = req.body;

    const asset = await Portfolio.findOne({ user: req.user, symbol });
    if (!asset || asset.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    await Trade.create({
      user: req.user,
      symbol,
      quantity,
      price,
      type: "SELL",
    });

    asset.quantity -= quantity;
    if (asset.quantity <= 0) {
      await asset.deleteOne();
    } else {
      await asset.save();
    }

    res.json({ message: "Sell order successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.tradeHistory = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(trades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
