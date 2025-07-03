const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();
const upload = require('../middleware/uploads');

router.get('/',postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/',  upload.single('featuredImage'),postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;