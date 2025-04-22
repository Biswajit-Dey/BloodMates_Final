const Hospital = require('../../Models/hospitalAuthority')

const hospitalStatusReject = async (req, res) => {
    const hospitalReg = req.query.hid;;
    console.log(hospitalReg);
    const hospital = await Hospital.findOne({hospitalReg: hospitalReg});
    if (!hospital) {
        return res.status(404).send('Hospital not found');
    }
    hospital.status = "rejected";
    await hospital.save();
    res.status(200).redirect('/admin');
}

module.exports = hospitalStatusReject;
