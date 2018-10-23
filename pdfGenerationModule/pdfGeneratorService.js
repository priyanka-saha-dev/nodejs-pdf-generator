var dataGathererService = require('./dataGathererModule/dataGathererService');
var htmlGenerator = require('./pdfTemplate/htmlGenerator');
var generatePDF = require('./pdfGenerator/pdfGenerator');
var generateEmail = require('./emailGeneratorModule/generateEmail')

var CONSTANTS = require('./constants');

function pdfGeneratorService() {

  var templateFile = './pdfGenerationModule/pdfTemplate/template.ejs';
  
  return dataGathererService()                        // Gets Data
    .then(data => htmlGenerator(templateFile, data))  // Builds HTML
    .then(html => generatePDF(html))      // Builds PDF
    .then(result => generateEmail(result.filename))   // Send Email
    .catch((err) => console.log('ERROR : ' + err));
}

module.exports = pdfGeneratorService;