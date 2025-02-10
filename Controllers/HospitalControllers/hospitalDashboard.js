const Hospital = require('../../Models/hospitalModel')

const hospitalDashboard = (req, res)=>{
    res.render('hospitalDashboard')
}

module.exports = hospitalDashboard;