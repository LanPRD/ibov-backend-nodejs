const fiisRouter = require('express').Router();

const ConverterCsvFile = require("../services/ConverterCsvFile");

fiisRouter.get('/', async (request, response) => {
    const converterCsvFile = new ConverterCsvFile();

    const { fiiList } = await converterCsvFile.listDatas();

    function formatKey(fii) {
      totalLength = fii.length;

      for (let i = 0; i < totalLength; i++) {
        fii[i].PVP = fii[i]["P/VP"];
        delete fii[i]["P/VP"];
      }
    }

    formatKey(fiiList);

    return response.render("fiis", { fiiList: fiiList });
});

module.exports = fiisRouter;