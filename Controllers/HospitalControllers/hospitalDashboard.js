const Hospital = require('../../Models/hospitalAuthority')

const hospitalDashboard = (req, res)=>{
    res.render('hospitalDashboard')
}

module.exports = hospitalDashboard;