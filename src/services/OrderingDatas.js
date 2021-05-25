const ConverterCsvFile = require("./ConverterCsvFile");

const JSONArray = {
  maxPriceToFilter: 200,
  minPriceToFilter: 0,
  maxDy: 50,
  maxRoa: 50,
  maxRoe: 50,

  orderByDY(array) {
    let filterDY = [];

    filterDY = array.filter(
      (array) => array.PRECO.replace(",", ".") < this.maxPriceToFilter
    );

    filterDY = filterDY.filter(
      (array) => array.PRECO.replace(",", ".") > this.minPriceToFilter
    );

    filterDY = filterDY.filter(
      (array) => array.DY.replace(",", ".") < this.maxDy
    );

    filterDY = filterDY.filter((array) => array.DY.replace(",", ".") != "");

    const res = filterDY.sort(
      (a, b) =>
        parseFloat(a.DY.replace(",", ".")) - parseFloat(b.DY.replace(",", "."))
    );

    return JSONArray.topRatios(res, "DY");
  },

  orderByROE(array) {
    let filterROE = [];

    filterROE = array.filter(
      (array) => array.PRECO.replace(",", ".") < this.maxPriceToFilter
    );

    filterROE = filterROE.filter(
      (array) => array.PRECO.replace(",", ".") > this.minPriceToFilter
    );

    filterROE = filterROE.filter((array) => array.ROE.replace(",", ".") != "");

    filterROE = filterROE.filter(
      (array) => array.ROE.replace(",", ".") < this.maxRoe
    );

    const res = filterROE.sort(
      (a, b) =>
        parseFloat(a.ROE.replace(",", ".")) -
        parseFloat(b.ROE.replace(",", "."))
    );

    return JSONArray.topRatios(res, "ROE");
  },

  orderByROA(array) {
    let filterROA = [];

    filterROA = array.filter(
      (array) => array.PRECO.replace(",", ".") < this.maxPriceToFilter
    );

    filterROA = filterROA.filter(
      (array) => array.PRECO.replace(",", ".") > this.minPriceToFilter
    );

    filterROA = filterROA.filter((array) => array.ROA.replace(",", ".") != "");

    filterROA = filterROA.filter(
      (array) => array.ROA.replace(",", ".") < this.maxRoa
    );

    const res = filterROA.sort(
      (a, b) =>
        parseFloat(a.ROA.replace(",", ".")) -
        parseFloat(b.ROA.replace(",", "."))
    );

    return JSONArray.topRatios(res, "ROA");
  },

  orderByPrice(array) {
    let filteredArray = [];

    filteredArray = array.filter(
      (array) => array.PRECO.replace(/\D+/g, "") > 0
    );

    filteredArray = filteredArray.filter(
      (array) => array.DY.replace(",", ".") < this.maxDy
    );

    const res = filteredArray.sort(
      (a, b) =>
        parseFloat(a.PRECO.replace(".", "").replace(",", ".")) -
        parseFloat(b.PRECO.replace(".", "").replace(",", "."))
    );

    return JSONArray.topRatios(res, "PRICE");
  },

  removeNullPvp(array) {
    const res = array.filter((array) => array["P/VP"].replace(",", ".") != "");

    return JSONArray.topRatios(res, "PVP");
  },

  topRatios(array, operator) {
    const arrayReceived = array;
    const arrayLength = arrayReceived.length;
    const finalJson = [];
    const numberShow = 7;
    const stop = arrayLength - numberShow;

    if (operator === "DY") {
      for (let i = stop; i < arrayLength; i++) {
        finalJson.push(arrayReceived[i]);
      }

      return JSON.stringify(finalJson.reverse());
    } else if (operator === "PRICE") {
      for (let i = 0; i < arrayLength; i++) {
        if (parseFloat(arrayReceived[i].DY) === 0) {
        } else {
          finalJson.push(arrayReceived[i]);
          if (finalJson.length === numberShow) {
            return JSON.stringify(finalJson.reverse());
          }
        }
      }
    } else if (operator === "ROE") {
      for (let i = stop; i < arrayLength; i++) {
        finalJson.push(arrayReceived[i]);
      }

      return JSON.stringify(finalJson.reverse());
    } else if (operator === "ROA") {
      for (let i = stop; i < arrayLength; i++) {
        finalJson.push(arrayReceived[i]);
      }

      return JSON.stringify(finalJson.reverse());
    } else if (operator === "PVP") {
      for (let i = 0; i < arrayLength; i++) {
        if (parseFloat(arrayReceived[i]["P/VP"].replace(",", ".")) != 1) {
        } else {
          finalJson.push(arrayReceived[i]);
          if (finalJson.length === numberShow) {
            return JSON.stringify(finalJson.reverse());
          }
        }
      }
    }
  },

  fiiTopDy: function (fii) {
    return this.orderByDY(fii);
  },
  fiiTopPrice: function (fii) {
    return this.orderByPrice(fii);
  },
  fiiTopPvp: function (fii) {
    return this.removeNullPvp(fii);
  },

  stockTopDy: function (stock) {
    return this.orderByDY(stock);
  },
  stockTopRoe: function (stock) {
    return this.orderByROE(stock);
  },
  stockTopRoa: function (stock) {
    return this.orderByROA(stock);
  },
};

module.exports = {
  JSONArray,

  async datas(req, res) {
    const converterCsvFile = new ConverterCsvFile();

    const { stocksList } = await converterCsvFile.listDatas();

    return res.send(JSONArray.stockTopRoa(stocksList));
  },
};
