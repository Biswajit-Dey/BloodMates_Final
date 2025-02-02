const Donour = require('../../Models/donourModel')

const editDonourProfile = (req, res, next)=>{
    const {marital, phone, blood, age, address} = req.body;
    console.log(marital)
    console.log(phone)
    console.log(blood)
    console.log(age)
    console.log(address)
    res.send(obj)
}

module.exports =  editDonourProfile