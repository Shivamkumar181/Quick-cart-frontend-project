const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/sellerData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seller Schema
const sellerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  accountNumber: String,
  panCard: String,
  aadharCard: String,
  username: String,
  password: String,
});

const Seller = mongoose.model("Seller", sellerSchema);

// API Route to save seller data
app.post("/api/seller", async (req, res) => {
  const seller = new Seller(req.body);
  await seller.save();
  res.status(201).json({ message: "Seller registered successfully!" });
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
