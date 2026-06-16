const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    symbol: String,

    type: {
      type: String,
      enum: ["BUY", "SELL"],
    },

    quantity: Number,

    price: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Trade", tradeSchema);
