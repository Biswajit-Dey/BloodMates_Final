const express = require('express');
const router = express.Router();

const AppError = require('../Utils/AppError')
const AsyncWrap = require('../Utils/AsyncWrap')

const viewDashboardController = require('../Controllers/HospitalControllers/hospitalDashboard')

//ADD THIS (authcontrol) MIDDLEWARE IN ANY ROUTE TO MAKE IT PRIVATE ROUTE:-

const registerHospitalAutorityForm = require('../Controllers/HospitalControllers/registerHospitalAutorityForm');
const addUser = require('../Controllers/HospitalControllers/addHospitalAutority');
const loginUser = require('../Controllers/HospitalControllers/loginControl');
const loginForm = require('../Controllers/HospitalControllers/loginForm');

router.get('/', viewDashboardController)
router.get('/register',registerHospitalAutorityForm);
router.get('/login',loginForm);
router.post('/register',addUser)//hostpital autority registration
router.post('/login',loginUser);//hospital autority login

module.exports = router