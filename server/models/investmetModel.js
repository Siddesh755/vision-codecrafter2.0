const pool = require('../config/db'); // Import your DB connection

const getInvestmentsByUser = async (user_id) => {
    try {
        const result = await pool.query(
            `SELECT stock_name, amt_invested, return, investment_date 
             FROM investments WHERE user_id = $1`, 
            [user_id]
        );
        return result.rows;
    } catch (error) {
        console.error('Error fetching investments:', error);
        throw error;
    }
};

module.exports = { getInvestmentsByUser };
