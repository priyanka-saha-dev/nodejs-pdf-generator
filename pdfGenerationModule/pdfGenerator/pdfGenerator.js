var pdf = require('html-pdf');
var CONSTANTS = require('./../constants');

var options = {
  format: 'Letter'
};


function generatePDF(html) {

  let outputFile = CONSTANTS.PDF_OUTPUT_DIR + 'pdf-' + new Date().getTime() + '.pdf';
  //let outputFile = CONSTANTS.PDF_OUTPUT_DIR + 'pdf-quotation.pdf';

  let generateDoc = (resolve, reject) => {
    pdf.create(html, options)
       .toFile(outputFile, (err, resp) => {
        
        if(err) {
            console.log('problem in generating PDF from template',err)
            return reject(err);
          } else {
            console.log('PDF generated in location ', outputFile);
            return resolve(resp);
          }
       })
  }

  return new Promise(generateDoc);

}

module.exports = generatePDF;