const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

app.get("/", (req, res) => {
  res.json({ message: "KuCoin Trading Backend Running" });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/markets", require("./routes/marketRoutes"));
app.use("/api/trades", require("./routes/tradeRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
