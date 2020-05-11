require('dotenv').config()
const nodemailer = require('nodemailer');
/** @description This functions sents the mail with help of nodemailer
 * @param {string} email -  Consists of a email address to which mail has to be sent
 * @requires nodemailer
*/
async function sendMail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.MAIL,
    to: email,
    subject: "Bull js implementation",
    text: "Bull js implemented using email sending",
  };

  await transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    }
    else
    console.log(response);
  });

}
module.exports = sendMail