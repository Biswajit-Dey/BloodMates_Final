const jwt = require('jsonwebtoken');
const Donour = require('../../Models/donourModel')

const viewDonourProfile = async(req, res)=>{
    const token = req.cookies.Bearer;
    const validate = jwt.verify(token, process.env.JWT_SECRET);
    const donour = await Donour.findOne({email: validate.email});
    console.log(`from viewDonourController ${donour}`)
    res.render('donourProfile',{donour});
}

module.exports = viewDonourProfile