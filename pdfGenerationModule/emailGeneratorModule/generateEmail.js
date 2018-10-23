var nodemailer = require('nodemailer');
var CONSTANTS = require('./../constants');
var path = require('path');

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
      filename: 'test.pdf',// file on disk as an attachment
      path: './output/test.pdf' // stream this file
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

function emailGeneratorService(filePath) {
  //console.log('Mailing with attchment - ' + filePath);
  let attachment = getFileParams(filePath)
  mailOptions.attachments.push(attachment);

  return transporter.sendMail(mailOptions, parseCB);
}

function getFileParams(filePath) {
  let filename = path.basename(filePath)
  let filePathRelative = CONSTANTS.PDF_OUTPUT_DIR + '/' + filename;

  let attachment = {
    filename: filename,
    path: filePathRelative
  }

  return attachment;
}


module.exports = emailGeneratorService;