const OTPModel = require('../db/schema');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user, 
        pass: process.env.pass, 
    },
});

const generateOTP = async (req, res) => {
    const { email } = req.body;
    const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();


    await OTPModel.create({ email, otp: generatedOTP });


    const mailOptions = {
        from: process.env.user,
        to: email,
        subject: 'Your OTP for Verification',
        text: `Your OTP is: ${generatedOTP}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Error sending OTP email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true });
        }
    });
};

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    const otpRecord = await OTPModel.findOne({ email, otp });

    if (otpRecord) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
};

module.exports = {
    generateOTP,
    verifyOTP,
};
