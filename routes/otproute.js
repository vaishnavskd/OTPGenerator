
const express = require('express');
const router = express.Router();
const OTPController = require('../controller/otpcontroller');

router.post('/api/generate', OTPController.generateOTP);

router.post('/api/verify', OTPController.verifyOTP);

module.exports = router;
