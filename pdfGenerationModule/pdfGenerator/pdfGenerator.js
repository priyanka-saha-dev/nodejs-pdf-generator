var pdf = require('html-pdf');
//var fs = require('fs');

var options = {
  format: 'Letter'
};


function generatePDF(html, outputFile) {

  let generateDoc = (resolve, reject) => {
    pdf.create(html, options)
       .toFile(outputFile, (err, resp) => {
        
        if(err) {
            return reject(err);
          } else {
            return resolve(resp);
          }
       })
  }

  return new Promise(generateDoc);

}

module.exports = generatePDF;