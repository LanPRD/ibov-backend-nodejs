const csvAcoes = './src/database/acoes.csv';
const csvFii = './src/database/fii.csv';

const convertFile = require('../public/scripts/convertFile.js');

const csv = require('csvtojson');
const attr = {
    noheader: false,
    delimiter: ';'
};

const dataCsv = {
    stocks: async function() {
        try {
            const stocks = await csv(attr).fromFile(csvAcoes);
            return stocks;
        } catch (err) {
            console.error(err);
        }
    },

    fii: async function() {
        try {
            const fii = await csv(attr).fromFile(csvFii);
            return fii;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = {
    
    async index(req, res) {
        const totalFii = (await dataCsv.fii()).length;
        const totalStocks = (await dataCsv.stocks()).length;

        return res.render('index', { totalFii: totalFii, totalAcoes: totalStocks });
    },

    async list(req, res) {
        const fiiTopDy = JSON.parse(convertFile.JSONArray.fiiTopDy(await dataCsv.fii()));
        const fiiTopPrice = JSON.parse(convertFile.JSONArray.fiiTopPrice(await dataCsv.fii()));
        const fiiTopPvp = JSON.parse(convertFile.JSONArray.fiiTopPvp(await dataCsv.fii()));
        
        const stockTopDy = JSON.parse(convertFile.JSONArray.stockTopDy(await dataCsv.stocks()));
        const stockTopRoe = JSON.parse(convertFile.JSONArray.stockTopRoe(await dataCsv.stocks()));
        const stockTopRoa = JSON.parse(convertFile.JSONArray.stockTopRoa(await dataCsv.stocks()));

        function formatKey(fii) {

            totalLength = fii.length;

            for (let i = 0; i < totalLength; i++) {
                fii[i].PVP = fii[i]['P/VP'];
                delete fii[i]['P/VP'];
            }

        };

        formatKey(fiiTopDy);
        formatKey(fiiTopPrice);
        formatKey(fiiTopPvp);

        return res.render('list', {
            fiiTopDy: fiiTopDy,
            fiiTopPrice: fiiTopPrice,
            fiiTopPvp: fiiTopPvp,
            stockTopDy: stockTopDy,
            stockTopRoe: stockTopRoe,
            stockTopRoa: stockTopRoa
        });
    },

    async stocks(req, res) {
        const stocksList = await dataCsv.stocks();

        return res.render('stocks', { stockList: stocksList });
    },

    async fiis(req, res) {
        const fiisList = await dataCsv.stocks();
        console.log(fiisList);

        function formatKey(fii) {

            totalLength = fii.length;

            for (let i = 0; i < totalLength; i++) {
                fii[i].PVP = fii[i]['P/VP'];
                delete fii[i]['P/VP'];
            }

        };

        formatKey(fiisList);

        return res.render('fiis', { fiiList: fiisList });
    }
}