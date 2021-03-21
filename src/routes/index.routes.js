const indexRouter = require('express').Router();

const ConverterCsvFile = require("../services/ConverterCsvFile");

indexRouter.get('/', async (request, response) => {
    const converterCsvFile = new ConverterCsvFile();

    const { totalFii, totalStocks } = await converterCsvFile.totalDatas();

    return response.render("index", { totalFii: totalFii, totalAcoes: totalStocks });
});

module.exports = indexRouter;