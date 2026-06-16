const Portfolio = require("../config/models/Portfolio");

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({ user: req.user });
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
