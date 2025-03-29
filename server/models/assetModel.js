const {query} = require("../config/db");

// Get all assets
const getAllAssets = async () => {
    const { rows } = await query("SELECT * FROM assets ORDER BY created_at DESC");
    return rows;
};

// Get asset by ID
const getAssetById = async (id) => {
    const { rows } = await query("SELECT * FROM assets WHERE id = $1", [id]);
    return rows[0];
};

// Create new asset
const createAsset = async ({ name, symbol, asset_type, price }) => {
    const { rows } = await query(
        `INSERT INTO assets (name, symbol, asset_type, price) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [name, symbol, asset_type, price]
    );
    return rows[0];
};

// Update asset
const updateAsset = async (id, { name, symbol, asset_type, price }) => {
    const { rows } = await query(
        `UPDATE assets SET name = $1, symbol = $2, asset_type = $3, price = $4 
         WHERE id = $5 RETURNING *`,
        [name, symbol, asset_type, price, id]
    );
    return rows[0];
};

// Delete asset
const deleteAsset = async (id) => {
    const { rows } = await query("DELETE FROM assets WHERE id = $1 RETURNING *", [id]);
    return rows[0];
};

module.exports = { getAllAssets, getAssetById, createAsset, updateAsset, deleteAsset };
