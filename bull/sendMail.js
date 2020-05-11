const nodemailer = require('nodemailer');
/** @description This functions sents the mail with help of nodemailer
 * @param {string} email -  Consists of a email address to which mail has to be sent
*/
async function sendMail(email) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'edurumohitha@gmail.com',
        pass: '16121a1528',
      },
    });
  
    let mailOptions = {
      from: 'edurumohitha@gmail.com',
      to: email,
      subject: "Bull js implementation",
      text: "Bull js implemented using email sending",
    };
  
    await transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
      }
      console.log(response);
    });
  
  }
  module.exports=sendMail