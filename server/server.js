const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config();

const userRoutes = require('./routes/userRoutes');
const priceRoutes = require('./routes/priceRoutes');
const investmentRoutes = require('./routes/investmentRoute');
const stockRoutes = require('./routes/stockRoutes'); // ✅ Import the new stock route

const app = express();
const FRONTEND_ORIGIN = 'http://localhost:5173'; // Update with your frontend URL

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true, // Allow cookies to be sent
  })
);

// Routes
app.use('/api/user', userRoutes);
app.use('/api/price', priceRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/stock', stockRoutes); // ✅ Add stock API route

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
