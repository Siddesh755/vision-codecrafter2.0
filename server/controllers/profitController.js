const { query } = require("../config/db")

const getProfitEstimates = async (req, res) => {
    try {
        const { userId } = req.params;
        const profits = await query(`
          SELECT a.name, SUM(t.quantity * (a.current_price - t.price)) AS estimated_profit
          FROM transactions t JOIN assets a ON t.asset_id = a.id
          WHERE t.user_id = $1 GROUP BY a.name`, [userId]);

        res.json(profits.rows);
    } catch (error) {
        res.status(500).json({ error: "Profit calculation failed" });
    }
}


module.exports = { getProfitEstimates };