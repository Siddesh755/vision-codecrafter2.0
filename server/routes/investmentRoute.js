const express = require('express');
const { generateInvestmentPDF } = require('../controllers/investmentController');
const router = express.Router();

router.get('/generate-pdf', generateInvestmentPDF);

module.exports = router;
