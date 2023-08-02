const express = require('express');
const applyController = require('../controllers/applyController');

const router = express.Router();

router.post('/', applyController.createApplication);
router.get('/', applyController.getAllApplications);

module.exports = router;