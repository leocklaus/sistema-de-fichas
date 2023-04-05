const express = require('express');
const router = express.Router();
const OperationController = require('../controllers/OperationController');

router.post('/add', OperationController.add);

module.exports = router;