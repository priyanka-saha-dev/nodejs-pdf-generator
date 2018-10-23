var pdf = require('html-pdf');
//var fs = require('fs');

var options = {
  format: 'Letter'
};

var parseCB = (err, resp) => {
  if (err){
    return console.log(err);
  }
  console.log('parsing pdf generator resp');
  console.log(resp);
  
}

function generatePDF(html, outputFile) {
  pdf.create(html, options).toFile(outputFile, parseCB);

  return true;
}

module.exports = generatePDF;