const express = require('express');
const router = express.Router();


const {getProfitEstimates}= require("../controllers/profitController")
const {buyTransaction,sellTransaction} = require("../controllers/transactionController")




router.post("/buy",buyTransaction );
router.post("/sell", sellTransaction);
router.get("/profits/:userId", getProfitEstimates);

module.exports = router;