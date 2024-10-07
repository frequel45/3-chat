const express = require('express');
const { handleQuery } = require('../controllers/assistantController.js');
const router = express.Router();

router.post('/ask', handleQuery);

module.exports = router;
