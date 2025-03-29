const {query} = require("../config/db")

const buyTransaction = async (req, res)=> {
    try {
      const { userId, assetId, quantity, price } = req.body;
      const total = quantity * price;

      await query("BEGIN");
      await query(`UPDATE users SET balance = balance - $1 WHERE id = $2`, [total, userId]);
      await query(
        `INSERT INTO transactions (user_id, asset_id, quantity, price, type) 
         VALUES ($1, $2, $3, $4, 'BUY')`, [userId, assetId, quantity, price]
      );
      await query("COMMIT");
      res.json({ success: true });
    } catch (error) {
      await query("ROLLBACK");
      res.status(500).json({ error: "Transaction failed" });
    }
  }

  const sellTransaction =async (req, res)=> {
    try {
      const { userId, assetId, quantity, price } = req.body;
      const total = quantity * price;

      await query("BEGIN");
      await query(`UPDATE users SET balance = balance + $1 WHERE id = $2`, [total, userId]);
      await query(
        `INSERT INTO transactions (user_id, asset_id, quantity, price, type) 
         VALUES ($1, $2, $3, $4, 'SELL')`, [userId, assetId, quantity, price]
      );
      await query("COMMIT");
      res.json({ success: true });
    } catch (error) {
      await query("ROLLBACK");
      res.status(500).json({ error: "Transaction failed" });
    }
  }

module.exports = {buyTransaction,sellTransaction};