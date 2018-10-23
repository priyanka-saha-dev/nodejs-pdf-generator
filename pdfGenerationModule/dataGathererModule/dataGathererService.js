var alexaResp = require('./request.json');

var constants = require('./../constants');

function dataGathererService() {

  let dataSvc = (resolve, reject) => {
    
    let dataForPDF = prepareDataForPDF();
    resolve(dataForPDF);
  }

  return new Promise(dataSvc);
}

function prepareDataForPDF() {
  let dataForPDF = {};
  
  dataForPDF.modelName = alexaResp.request.intent.slots.modelName.value;
  dataForPDF.birthDate = alexaResp.request.intent.slots.birthDate.value;
  dataForPDF.makeName = alexaResp.request.intent.slots.makeName.value;
  dataForPDF.companyName = alexaResp.request.intent.slots.companyName.value;
  dataForPDF.regisDate = alexaResp.request.intent.slots.regisDate.value;
  dataForPDF.premium = '0.0 EUR';

  return dataForPDF;
}

module.exports = dataGathererService;