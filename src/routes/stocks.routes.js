const stocksRouter = require("express").Router();

const ConverterCsvFile = require("../services/ConverterCsvFile");

stocksRouter.get("/", async (request, response) => {
  const converterCsvFile = new ConverterCsvFile();

  const { stocksList } = await converterCsvFile.listDatas();

  return response.render("stocks", { stockList: stocksList });
});

module.exports = stocksRouter;
