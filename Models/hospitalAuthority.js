const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const hospitalSchema = new mongoose.Schema({
    hospitalName:{
        type: String,
        required: true
    },
    hospitalReg:{
        type: String,
        required: true,
        unique: true
    },
    hospitalEmail:{
        type: String,
        required: true,
        unique: true      
    },
    hospitalPhone1:{
        type: String,
        required: true,    
    },
    hospitalPhone2:{
        type: String,
        required: true,    
    },
    hospitalSuper:{
        type: String,
        required: true,     
    },
    password:{
        type: String,
        required: true
    },
    address: {
        location: String,
        district: String,
        state: String,
        pincode: String
    },
    status:{
        type: String,
        default: "pending",
        enum: ["pending", "approved", "rejected"]
    },
    bloodRequests:[
        {
            bloodType:{
                type : String,
            },
            quantity:{
                type : String,
            },
            deadline:{
                type : String,
            },
            status:{
                type : String,
                default: "pending",
                enum: ["pending", "donated", "revoked"]
            },
            _id: false 
        }
    ]
})


const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital
