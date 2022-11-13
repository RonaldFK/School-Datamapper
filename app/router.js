const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/',mainController.displayPromos);
router.get('/:promo',mainController.displayStudents);

module.exports = router;