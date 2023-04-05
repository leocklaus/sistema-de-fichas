const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const { verifyClientId } = require('../helpers/verify-id');

router.post('/add', ClientController.add);
router.get('/all', ClientController.getAllClients);
router.get('/:id', verifyClientId, ClientController.getClientById);
router.delete('/delete/:id', verifyClientId, ClientController.deleteClient);
router.patch('/update/:id', verifyClientId, ClientController.updateUser);

module.exports = router;