var dataGathererService = require('./dataGathererModule/dataGathererService');
var htmlGenerator = require('./pdfTemplate/htmlGenerator');
var generatePDF = require('./pdfGenerator/pdfGenerator');
var generateEmail = require('./emailGeneratorModule/generateEmail')

var constants = require('./constants');

function pdfGeneratorService() {
  
  var templateFile = './pdfGenerationModule/pdfTemplate/template.ejs';
  //var outputFile = constants.PDF_OUTPUT_DIR + 'pdf-' + new Date().getTime() + '.pdf';
  var outputFile = constants.PDF_OUTPUT_DIR + 'pdf-quotation.pdf';

  return dataGathererService()                        // Gets Data
        .then(function (data) {
          return htmlGenerator(templateFile, data);   // Builds HTML
        })
        .then(function (html) {
          return generatePDF(html, outputFile);       // Builds PDF
        })
        .then(function (success) {
          console.log('PDF generation successful at ' + outputFile);
          generateEmail(outputFile);           // Send Email
          return success;
        })
        .catch(function (err) {
          console.log('ERROR in PDF generation : ' + err);
          return false;
        });
}

module.exports = pdfGeneratorService;