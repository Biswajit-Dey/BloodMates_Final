const Hospital = require('../../Models/hospitalAuthority')
const jwt = require('jsonwebtoken')

const hospitalDashboard = async(req, res)=>{
    // const token = req.cookies.Bearer;
    // const validate = jwt.verify(token, process.env.JWT_SECRET);
    // const hospital = await Hospital.findOne({hospitalEmail: validate.email});
    // console.log(`from hospitalDashboard ${hospital}`)
    res.render('hospitalDashboard')
}

module.exports = hospitalDashboard;