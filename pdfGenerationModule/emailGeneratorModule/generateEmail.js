var nodemailer = require('nodemailer');
var CONSTANTS = require('./../constants');
var path = require('path');

/*
 * For GMAIL: (https://community.nodemailer.com/using-gmail/)
 * https://myaccount.google.com/lesssecureapps --> Turn ON
 * https://accounts.google.com/b/0/displayunlockcaptcha --> Allow
 */
var transporter = nodemailer.createTransport({
  //pool: true,
  //service: CONSTANTS.SENDER_EMAIL_SERVICE,
  host: CONSTANTS.SENDER_EMAIL_HOST,
  port: 465,
  secure: true, // use SSL
  //proxy: 'http://proxy.cognizant.com:6050',
  auth: {
    user: CONSTANTS.SENDER_EMAIL_ID,
    pass: CONSTANTS.SENDER_EMAIL_PASSWORD
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: CONSTANTS.SENDER_EMAIL_ID,
  to: CONSTANTS.RECIEVER_EMAIL_ID,
  cc: CONSTANTS.RECIEVER_COPY_EMAIL_ID,
  subject: CONSTANTS.EMAIL_SUBJECT,
  text: CONSTANTS.EMAIL_BODY,
  attachments: [
    
  ]
  // dsn: {
  //   id: 'ID',
  //   return: 'headers',
  //   notify: ['success', 'failure', 'delay'],
  //   recipient: CONSTANTS.SENDER_EMAIL_ID
  // }
};

var parseCB = (error, resp) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent : ' + resp.response);
  }
}

function emailGeneratorService(filePath) {
  //console.log('Mailing with attchment - ' + filePath);

  if(filePath) {
    mailOptions.attachments = [];
    let attachment = getFileParams(filePath)
    mailOptions.attachments.push(attachment);
  }
  
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