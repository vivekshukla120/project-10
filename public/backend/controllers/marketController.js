const axios = require("axios");

exports.getMarkets = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 20,
          page: 1,
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
