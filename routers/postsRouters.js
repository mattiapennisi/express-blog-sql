// Variable to import Express
const express = require('express')

// Routes variables
const router = express.Router()
const postController = require('../controllers/postController.js')

// Routes
router.get('/', postController.index)

router.get('/:id', postController.show)

router.post('/', postController.store)

router.put('/:id', postController.update)

router.patch('/:id', postController.modify)

router.delete('/:id', postController.destroy)

// Export
module.exports = router