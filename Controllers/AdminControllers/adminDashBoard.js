const Hospital = require('../../Models/hospitalAuthority')
const Donour = require('../../Models/donourModel')

const adminDashBoard = async (req, res) => {
    const hospitals = await Hospital.find({status: "approved"});
    const pendingHospitals = await Hospital.find({status: "pending"});
    const totalHospitals = hospitals.length;
    const donours = await Donour.find();
    const totalDonours = donours.length;
    // console.log(`from adminDashBoard ${hospitals}`)
    // console.log(`from adminDashBoard ${donours}`)
    res.render('adminDashboard', { hospitals, donours, totalHospitals, totalDonours, pendingHospitals });
}

module.exports = adminDashBoard;