const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Category title is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    }
}, { timestamps: true});

module.exports = mongoose.model('Category', CategorySchema);