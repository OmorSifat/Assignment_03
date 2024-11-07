// controllers/blogController.js

// Create Blog Controller
exports.createBlog = (req, res) => {
    res.status(201).json("Blog created successfully");
};

// Read Blog Controller
exports.readBlog = (req, res) => {
    res.status(200).json("Blog read successfully");
};

// Update Blog Controller
exports.updateBlog = (req, res) => {
    res.status(200).json("Blog update successfully");
};

// Delete Blog Controller
exports.deleteBlog = (req, res) => {
    res.status(200).json("Blog delete successfully");
};
