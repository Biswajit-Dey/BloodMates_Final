const Hospital = require('../../Models/hospitalAuthority')
const BloodStock = require('../../Models/bloodStockModel')
const jwt = require('jsonwebtoken')
const cron = require("node-cron");
const THRESHOLD=10;

const hospitalDashboard = async(req, res)=>{
    // const token = req.cookies.Bearer;
    // const validate = jwt.verify(token, process.env.JWT_SECRET);
    // const hospital = await Hospital.findOne({hospitalEmail: validate.email});
    // console.log(`from hospitalDashboard ${hospital}`)
    res.render('hospitalDashboard')
    const hospital = await Hospital.findById(req.hospitalId);
    if (!hospital) return res.status(404).json({ message: 'Hospital not found' });
    
    // Start cron job for the logged-in hospital
    cron.schedule('* * * * *', async () => {
        console.log(`Checking blood stock for hospital: ${hospital.hospitalName}`);
        const bloodStock = await BloodStock.findOne({ hospital: hospital._id });
        if (!bloodStock) {
            console.log(`No blood stock found for hospital: ${hospital.hospitalName}`);
            return;
        }
        
        Object.entries(bloodStock.bloodGroups).forEach(([group, quantity]) => {
            if (quantity < THRESHOLD) {
                console.log(`WARNING: ${group} blood stock is below threshold in hospital: ${hospital.hospitalName}`);
            }
        });
    });
    
}

module.exports = hospitalDashboard;