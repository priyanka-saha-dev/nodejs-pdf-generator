var dataGathererService = require('./dataGathererModule/dataGathererService');
var htmlGenerator = require('./pdfTemplate/htmlGenerator');
var generatePDF = require('./pdfGenerator/pdfGenerator');
var generateEmail = require('./emailGeneratorModule/generateEmail')

var CONSTANTS = require('./constants');

function pdfGeneratorService() {

  var templateFile = './pdfGenerationModule/pdfTemplate/template.ejs';
  //var outputFile = constants.PDF_OUTPUT_DIR + 'pdf-' + new Date().getTime() + '.pdf';
  var outputFile = CONSTANTS.PDF_OUTPUT_DIR + 'pdf-quotation.pdf';

  return dataGathererService()                        // Gets Data
    .then(data => htmlGenerator(templateFile, data))  // Builds HTML
    .then(html => generatePDF(html, outputFile))      // Builds PDF
    .then(result => generateEmail(result.filename))   // Send Email
    .catch((err) => console.log('ERROR in PDF generation : ' + err));
}

module.exports = pdfGeneratorService;