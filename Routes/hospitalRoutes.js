const express = require('express');
const router = express.Router();

const AppError = require('../Utils/AppError')
const AsyncWrap = require('../Utils/AsyncWrap')

const viewDashboardController = require('../Controllers/HospitalControllers/hospitalDashboard')

//ADD THIS (authcontrol) MIDDLEWARE IN ANY ROUTE TO MAKE IT PRIVATE ROUTE:-
const authControl = require('../Middlewares/authController')

router.get('/', viewDashboardController)

module.exports = router