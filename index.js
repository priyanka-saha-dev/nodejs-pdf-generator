var express = require('express');
var bodyParser = require('body-parser');
var pdfGeneratorSVC = require('./pdfGenerationModule/pdfGeneratorService');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(3000, function () {
  console.log('Listening on Port : 3000');
  console.log(`Generate PDF using -- http://localhost:3000/pdf`)
});

app.get('/');

app.get('/pdf', function (req, res) {
  console.log('sending fixed data')
  pdfGeneratorSVC.pdfGeneratorServicefromJSON();
  res.send('/');
});

app.post('/pdf/:id', function(req, res) {
  let qid = req.params.id;

  //Tobe implemented further - fetch from dynamoDB & display

  res.send(`Post Request fired with params ${qid}`);
});

app.post('/pdf', function(req, res) {
  
  let quotationData = req.body;
  console.log(quotationData); //Tobe implemented further
  pdfGeneratorSVC.pdfGeneratorService(quotationData);

// companyName:AXA
// birthDate:01-01-1980
// makeName:BMW
// modelName:S3
// regisDate:01-01-2018
// claims:no
// ispolicyholderDriver:yes
// usage:private
// email:test@mail.com
// premium:250.00 EUR

  res.send(`Post Request`);
});