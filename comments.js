// Create web server
const express = require('express');
// Create router
const router = express.Router();
// Import the comment controller
const commentController = require('../controllers/comments');
// Import the comment model
const Comment = require('../models/Comment');
// Import the user model
const User = require('../models/User');
// Import the post model
const Post = require('../models/Post');
// Import the auth middleware
const auth = require('../middleware/auth');

// GET all comments
router.get('/', commentController.getAllComments);

// GET all comments from a post
router.get('/post/:postId', commentController.getAllCommentsFromPost);

// GET all comments from a user
router.get('/user/:userId', commentController.getAllCommentsFromUser);

// POST a new comment
router.post('/', auth, commentController.createComment);

// PUT an existing comment
router.put('/:commentId', auth, commentController.updateComment);

// DELETE an existing comment
router.delete('/:commentId', auth, commentController.deleteComment);

// Export the router
module.exports = router;