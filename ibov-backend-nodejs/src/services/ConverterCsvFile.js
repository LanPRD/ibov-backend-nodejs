const csv = require("csvtojson");

const csvStocks = "./src/database/acoes.csv";
const csvFii = "./src/database/fii.csv";

const attr = {
  noheader: false,
  delimiter: ";",
};

async function stockListConverted() {
  try {
    const stock = await csv(attr).fromFile(csvStocks);
    return stock;
  } catch (err) {
    console.log(err);
  }
}

async function fiiListConverted() {
  const fii = await csv(attr).fromFile(csvFii);

  return fii;
}

module.exports = class ConverterCsvFile {
  async totalDatas() {
    try {
      const totalStocks = (await stockListConverted()).length;
      const totalFii = (await fiiListConverted()).length;

      return {
        totalStocks,
        totalFii,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async listDatas() {
    try {
      const stocksList = await stockListConverted();
      const fiiList = await fiiListConverted();

      return {
        stocksList,
        fiiList,
      };
    } catch (err) {
      console.log(err);
    }
  }
};
