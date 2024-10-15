const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 }, // New field for quantity
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Ensure userId is required
});

module.exports = mongoose.model('Product', productSchema);
