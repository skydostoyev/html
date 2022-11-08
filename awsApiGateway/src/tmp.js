const AWS = require('aws-sdk'); 
const nodeMailer = require("nodemailer")
exports.sendMail = async(from, to, totp6) => {
  
   const transporter = nodeMailer.createTransport({
     host: "smtp.host.com",
     secure: true,
     port: 465,
     auth: {
       user: "user",
       pass: "pass",
     },
   });
   const mailOptions = {
      from: from, // sender address
      to: to,
      subject: "subject", // Subject line
      html: `<p>Your passcode is 123455.</p>`, // plain text body
     };
     return await transporter.sendMail(mailOptions, function(err, info) {
        if (err) { 
           return "Error, Please try again."
         }else{
            return "OK, Please check the passcode in the mail."
         }
     }).promise()
 　}
