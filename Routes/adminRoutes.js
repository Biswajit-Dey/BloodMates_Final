const express = require('express');
const router = express.Router();

const AppError = require('../Utils/AppError')
const AsyncWrap = require('../Utils/AsyncWrap');

const adminDashBoard = require('../Controllers/AdminControllers/adminDashBoard');
const hospitalStatusApprover = require('../Controllers/AdminControllers/hospitalStatusApprover');
const hospitalStatusReject = require('../Controllers/AdminControllers/hospitalStatusReject');
const authControl = require('../Middlewares/authController');

router.get('/', adminDashBoard);
router.get('/approve', hospitalStatusApprover);
router.get('/reject', hospitalStatusReject);


module.exports = router;