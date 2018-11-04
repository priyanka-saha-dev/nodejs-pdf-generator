var ejs = require('ejs');

function htmlGenerator(templateFile, data) {

  let renderHTML = (resolve, reject) => {
    ejs.renderFile(templateFile, data, function (err, html) {
      if (err) {
        console.log('problem is generating html',err);
        reject(err);
      } else {
        console.log('html is rendered successfully');
        resolve(html);
      }
    });
  }
  return new Promise(renderHTML);
}

module.exports = htmlGenerator;
