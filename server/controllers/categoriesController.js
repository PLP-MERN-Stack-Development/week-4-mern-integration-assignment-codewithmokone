const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { title, description} = req.body;
        
        const category = new Category({ title, description });
        await category.save();

        res.status(201).json({ success: true, data: category});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error', error: error.message });
    }
};


// Update a category
exports.updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};