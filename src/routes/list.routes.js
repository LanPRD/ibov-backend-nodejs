const listRouter = require('express').Router();

const ConverterCsvFile = require("../services/ConverterCsvFile");
const orderingDatas = require("../services/OrderingDatas");

listRouter.get('/', async (request, response) => {
    const converterCsvFile = new ConverterCsvFile();

    const { fiiList, stocksList } = await converterCsvFile.listDatas();

    const fiiTopDy = JSON.parse(orderingDatas.JSONArray.fiiTopDy(fiiList));
    const fiiTopPrice = JSON.parse(orderingDatas.JSONArray.fiiTopPrice(fiiList));
    const fiiTopPvp = JSON.parse(orderingDatas.JSONArray.fiiTopPvp(fiiList));

    const stockTopDy = JSON.parse(orderingDatas.JSONArray.stockTopDy(stocksList));
    const stockTopRoe = JSON.parse(
      orderingDatas.JSONArray.stockTopRoe(stocksList)
    );
    const stockTopRoa = JSON.parse(
      orderingDatas.JSONArray.stockTopRoa(stocksList)
    );

    function formatKey(fii) {
      totalLength = fii.length;

      for (let i = 0; i < totalLength; i++) {
        fii[i].PVP = fii[i]["P/VP"];
        delete fii[i]["P/VP"];
      }
    }

    formatKey(fiiTopDy);
    formatKey(fiiTopPrice);
    formatKey(fiiTopPvp);

    return response.render("list", {
      fiiTopDy: fiiTopDy,
      fiiTopPrice: fiiTopPrice,
      fiiTopPvp: fiiTopPvp,
      stockTopDy: stockTopDy,
      stockTopRoe: stockTopRoe,
      stockTopRoa: stockTopRoa,
    });
});

module.exports = listRouter;