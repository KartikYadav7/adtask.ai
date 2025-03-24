const express = require('express');
const router = express.Router();
const {formData,freeTrial,scheduleCall} = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware')


router.post('/formData',formData);
router.post('/freeTrial',authMiddleware,freeTrial)
router.post('/scheduleCall',authMiddleware,scheduleCall);

module.exports = router