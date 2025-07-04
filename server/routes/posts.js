const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();
const upload = require('../middleware/uploads');
// const multer = require('multer');

router.get('/',postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/',  upload.single('featuredImage'),postsController.createPost);
router.put('/:id', upload.single('featuredImage'), postsController.updatePost);
router.delete('/:id', postsController.deletePost);
router.put('/:id/comments', postsController.addComment);

module.exports = router;