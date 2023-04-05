const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/TransactionController');
const { verifyTransactionId } = require('../helpers/verify-id');


router.post('/add', TransactionController.add);
router.patch('/update/:id', verifyTransactionId,TransactionController.updateOperation);
router.delete('/delete/:id', verifyTransactionId, TransactionController.deleteOperation);

module.exports = router;