const nodemailer = require('nodemailer');
const Donour = require('../../Models/donourModel')
const Hospital = require('../../Models/hospitalAuthority')
const jwt = require('jsonwebtoken');


function BloodRequestControl(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({
            message: 'No Authorization Header'
        })
    }
    try {
        const token = authorization.split('Bearer ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'Invalid Token Format'
            })
        }
        const decode = jwt.verify(token, SECRET_KEY);
        req.user = decode
        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                message: 'Session Expired',
                error: error.message,
            })
        }
        if (error instanceof jwt.JsonWebTokenError || error instanceof TokenError) {
            return res.status(401).json({
                message: 'Invalid Token',
                error: error.message,
            })
        }
        res.status(500).json({
            message: 'Internal server Error',
            error: error.message,
            stack: error.stack
        });
    }
}

module.exports = BloodRequestControl

const bloodReqControl = async (req, res)=>{
    console.log("Received data:", req.body);
    const {bloodGroup, donationDate, bloodAmount } = req.body;
    const token = req.cookies.Bearer;
    const validate = jwt.verify(token, process.env.JWT_SECRET);
    let hospital = await Hospital.findOne({ hospitalEmail: validate.email });
    let donours = await Donour.find({bloodGroup})
    const emails = donours.map(donour => donour.email).join(', ');
    console.log(`sending request mail to ${emails}`);

    const request = {
        bloodType: bloodGroup,
        quantity: bloodAmount,
        deadline: donationDate
    }

    const updatedHospital = await Hospital.findByIdAndUpdate(
        hospital.id,
        { 
            $push: { bloodRequests: request } 
        },
        { new: true } // Returns the updated document
    );

    console.log(request)

    var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SENDER_MAIL,
                    pass: process.env.MAIL_PASS
                }
            });
            var mailOptions = {
                from: process.env.SENDER_MAIL,
                to: emails,
                subject: `Blood Request || ${hospital.hospitalName}`,
                text: `Dear user ${hospital.hospitalName} needs ${bloodAmount} of ${bloodGroup} blood at emergency basis within ${donationDate}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.json({ message: "Donation received successfully!", receivedData: req.body });
}

module.exports= bloodReqControl