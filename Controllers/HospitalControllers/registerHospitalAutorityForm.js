const Hospital = require('../../Models/hospitalModel')

const registerHospitalAutority = (req, res)=>{
    res.render('hospitalAutorityRegistrationForm');
}

module.exports = registerHospitalAutority;