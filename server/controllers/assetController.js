const Asset = require("../models/assetModel");

// Get all assets
const getAssets = async (req, res) => {
    try {
        const assets = await Asset.getAllAssets();
        res.json(assets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get asset by ID
const getAsset = async (req, res) => {
    try {
        const asset = await Asset.getAssetById(req.params.id);
        if (!asset) return res.status(404).json({ message: "Asset not found" });
        res.json(asset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new asset
const createAsset = async (req, res) => {
    try {
        const { name, symbol, asset_type, price } = req.body;
        if (!name || !symbol || !asset_type || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const asset = await Asset.createAsset({ name, symbol, asset_type, price });
        res.status(201).json(asset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update asset
const updateAsset = async (req, res) => {
    try {
        const { name, symbol, asset_type, price } = req.body;
        const asset = await Asset.updateAsset(req.params.id, { name, symbol, asset_type, price });
        if (!asset) return res.status(404).json({ message: "Asset not found" });
        res.json(asset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete asset
const deleteAsset = async (req, res) => {
    try {
        const asset = await Asset.deleteAsset(req.params.id);
        if (!asset) return res.status(404).json({ message: "Asset not found" });
        res.json({ message: "Asset deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAssets, getAsset, createAsset, updateAsset, deleteAsset };
    