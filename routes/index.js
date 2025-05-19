
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/contact');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

module.exports = router;