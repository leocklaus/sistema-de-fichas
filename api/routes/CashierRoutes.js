const express = require('express');
const router = express.Router();
const CashierController = require('../controllers/CashierController');

router.post('/add', CashierController.add);

module.exports = router;