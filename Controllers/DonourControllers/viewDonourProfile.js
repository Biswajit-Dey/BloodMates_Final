const Donour = require('../../Models/donourModel')

const viewDonourProfile = async(req, res)=>{

    const donours = await Donour.find();
    res.render('donourProfile');
}

module.exports = viewDonourProfile