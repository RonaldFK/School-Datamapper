const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/',mainController.displayPromos);
router.get('/promo/:promo',mainController.displayStudents);
router.post('/promo/:promo',mainController.displayStudents);
router.get('/search',mainController.displaySearch);
router.post('/search',mainController.InsertData)


module.exports = router;