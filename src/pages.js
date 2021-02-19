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
            const acoes = await csv(attr).fromFile(csvAcoes);
            return acoes;
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
        const totalAcoes = (await dataCsv.stocks()).length;

        return res.render('index', { totalFii: totalFii, totalAcoes: totalAcoes });
    },

    async list(req, res) {
        const fiiTopDy = JSON.parse(convertFile.JSONArray.fiiTopDy(await dataCsv.fii()));
        const fiiTopPrice = JSON.parse(convertFile.JSONArray.fiiTopPrice(await dataCsv.fii()));
        const fiiTopPvp = JSON.parse(convertFile.JSONArray.fiiTopPvp(await dataCsv.fii()));
        
        // const stocksTopDy = JSON.parse(convertFile.JSONArray.stocksTopDy(await dataCsv.stocks()));
        // const stocksTopPrice = JSON.parse(convertFile.JSONArray.stocksTopPrice(await dataCsv.stocks()));
        // const stocksTopPvp = JSON.parse(convertFile.JSONArray.stocksTopPvp(await dataCsv.stocks()));

        function formatKey(fii) {

            totalLength = fii.length;

            for (let i = 0; i < totalLength; i++) {
                fii[i].PVP = fii[i]['P/VP'];
                delete fii[i]['P/VP'];
            }

        };

        formatKey(fiiTopPvp);

        return res.render('list', {
            fiiTopDy: fiiTopDy,
            fiiTopPrice: fiiTopPrice,
            fiiTopPvp: fiiTopPvp,
            // stocksTopDy: stocksTopDy,
            // stocksTopPrice: stocksTopPrice,
            // stocksTopPvp: stocksTopPvp
        });
    }
}