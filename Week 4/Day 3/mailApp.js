// // send mail
// // Reference : https://youtu.be/fwtoYEOlClg


const nodeMailer = require('nodemailer');
const transport = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: 'captainwalter11@gmail.com',
        pass: 'erlkhotxqdlbzngz'
    }
})

let mailOptions = {
    from: 'captainwalter11@gmail.com',
    to: 'captainwalter11@gmail.com',
    subject: 'Email using Nodejs',
    text: 'Hello World'
}

transport.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err)
    } else{
        console.log("Email has been sent successfully"+ info.response);
    }
})

module.exports.sendEmail;