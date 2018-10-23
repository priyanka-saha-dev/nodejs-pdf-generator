var ejs = require('ejs');

function htmlGenerator(templateFile, data) {

  let renderHTML = (resolve, reject) => {
    ejs.renderFile(templateFile, data, function (err, html) {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  }
  return new Promise(renderHTML);
}

module.exports = htmlGenerator;
