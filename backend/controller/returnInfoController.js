const ReturnInfo = require('../model/ReturnInfo');

// Create a new returnInfo
exports.createReturnInfo = async (req, res) => {
    try {
        const returnInfo = new ReturnInfo(req.body);
        await returnInfo.save();
        res.status(201).json(returnInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all returnInfos
exports.getAllReturnInfos = async (req, res) => {
    try {
        const returnInfos = await ReturnInfo.find();
        res.status(200).json(returnInfos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a returnInfo by ID
exports.getReturnInfoById = async (req, res) => {
    try {
        const returnInfo = await ReturnInfo.findById(req.params.id);
        if (!returnInfo) {
            return res.status(404).json({ message: 'ReturnInfo not found' });
        }
        res.status(200).json(returnInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a returnInfo by ID
exports.updateReturnInfo = async (req, res) => {
    try {
        const returnInfo = await ReturnInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!returnInfo) {
            return res.status(404).json({ message: 'ReturnInfo not found' });
        }
        res.status(200).json(returnInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a returnInfo by ID
exports.deleteReturnInfo = async (req, res) => {
    try {
        const returnInfo = await ReturnInfo.findByIdAndDelete(req.params.id);
        if (!returnInfo) {
            return res.status(404).json({ message: 'ReturnInfo not found' });
        }
        res.status(200).json({ message: 'ReturnInfo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
