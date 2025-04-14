// Variable to import Express
const express = require('express')

// Routes variables
const router = express.Router()
const postController = require('../controllers/postController.js')

// Routes
router.get('/', postController.index)

router.get('/:slug', postController.show)

router.post('/', postController.store)

router.put('/:slug', postController.update)

router.patch('/:slug', postController.modify)

router.delete('/:slug', postController.destroy)

// Export
module.exports = router