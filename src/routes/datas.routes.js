const datasRouter = require('express').Router();

const ConverterCsvFile = require("../services/ConverterCsvFile");
const orderingDatas = require("../services/OrderingDatas");

datasRouter.get('/', async (request, response) => {
        const converterCsvFile = new ConverterCsvFile();

        const { stocksList } = await converterCsvFile.listDatas();
        
        return response.send(orderingDatas.JSONArray.stockTopRoa(stocksList));
});

module.exports = datasRouter;