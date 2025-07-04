const Post = require('../models/Post');
const upload = require('../middleware/uploads');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { log } = require('console');

//Get all posts
exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        const formattedPosts = posts.map(post => {
            const postObj = post.toObject();

            if (postObj.featuredImage?.data) {
                postObj.featuredImage = {
                    type: postObj.featuredImage.contentType,
                    data: postObj.featuredImage.data.toString('base64')
                };
            }

            return postObj;
        });
        res.status(200).json(formattedPosts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Get a single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new post
exports.createPost = async (req,res) => {
    const { title, content, slug, category, tags,author, excerpt, isPublished} = req.body;
    
    try {
        const imageData = req.file ? fs.readFileSync(path.join(__dirname + '../../uploads/' + req.file.filename)): null;
        
        const newPost = new Post({
          title,
          content,
          slug, 
          category,
          tags,
          author,
          excerpt,
          tags,
          featuredImage: {
            data: imageData,
            contentType: 'image/png'
          },
          isPublished
        });

        const post = await Post.create(newPost)
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a post
exports.updatePost = async (req, res) => {
  console.log(req.body);
  
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        featuredImage: req.file?.filename,
      },
      { new: true, runValidators: true }
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  console.log(req.params.id);
  
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/posts/:postId/comments
exports.addComment = async (req, res) => {
  const { id } = req.params;

  const { userId, content } = req.body;

  console.log("User Id:", userId);
  console.log("Content:", content);
  console.log("Post Id:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  if (!userId || !content) {
    return res.status(400).json({ error: 'User ID and comment content are required' });
  }

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await post.addComment(userId, content);

    res.status(200).json({ message: 'Comment added successfully', comments: post.comments });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


