var nodemailer = require('nodemailer');
var CONSTANTS = require('./../constants');

/*
 * For GMAIL: (https://community.nodemailer.com/using-gmail/)
 * https://myaccount.google.com/lesssecureapps --> Turn ON
 * https://accounts.google.com/b/0/displayunlockcaptcha --> Allow
 */
var transporter = nodemailer.createTransport({
  service: CONSTANTS.SENDER_EMAIL_SERVICE,
  auth: {
    user: CONSTANTS.SENDER_EMAIL_ID,
    pass: CONSTANTS.SENDER_EMAIL_PASSWORD
  }
});

var mailOptions = {
  from: CONSTANTS.SENDER_EMAIL_ID,
  to: CONSTANTS.RECIEVER_EMAIL_ID,
  subject: CONSTANTS.EMAIL_SUBJECT,
  text: CONSTANTS.EMAIL_BODY,
  attachments: [
    {
      // file on disk as an attachment
      filename: 'test.pdf',
      path: './output/test.pdf' // stream this file
    },
    {
      // file on disk as an attachment
      filename: 'pdf-quotation.pdf',
      path: './output/pdf-quotation.pdf' // stream this file
    }
  ]
};

var parseCB = (error, resp) => {
  console.log('parsing email resp')
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent : ' + resp.response);
  }
}

function emailGeneratorService(filename) {
  console.log('Mailing with attchment - ' + filename);
  return transporter.sendMail(mailOptions, parseCB);
}

module.exports = emailGeneratorService;