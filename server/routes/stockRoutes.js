const express = require("express");
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const router = express.Router();
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY; // Get API key from .env

// Route to fetch stock data
router.get("/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol.toUpperCase();
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching stock data" });
    }
});

module.exports = router;
