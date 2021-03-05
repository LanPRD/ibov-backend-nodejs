const csvAcoes = './src/database/acoes.csv';
const csvFii = './src/database/fii.csv';

const csv = require('csvtojson');
const attr = {
    noheader: false,
    delimiter: ';'
};


const JSONArray = {

    orderByDY(array) {
        const res = array
                        .sort((a, b) => 
                        parseFloat((a.DY).replace(',', '.')) - parseFloat((b.DY).replace(',', '.')));

        return JSONArray.topRatios(res, 'DY');
    },

    orderByROE(array) {
        const res = array
                        .sort((a, b) => 
                        parseFloat((a.ROE).replace(',', '.')) - parseFloat((b.ROE).replace(',', '.')));

        return JSONArray.topRatios(res, 'ROE');
    },

    orderByROA(array) {
        const res = array
                        .sort((a, b) => 
                        parseFloat((a.ROA).replace(',', '.')) - parseFloat((b.ROA).replace(',', '.')));

        return JSONArray.topRatios(res, 'ROA');
    },
    
    orderByPrice(array) {
        const res = array
                    .filter(array => (array.PRECO).replace(/\D+/g, '') > 0)
                    .sort((a, b) => parseFloat((a.PRECO).replace('.', '').replace(',', '.')) - parseFloat((b.PRECO).replace('.', '').replace(',', '.')));
        
        return JSONArray.topRatios(res, 'PRICE');
    },
    
    removeNullPvp(array) {
        const res = array
                    .filter(array => (array['P/VP']).replace(',', '.') != '');

        return JSONArray.topRatios(res, 'PVP');
    },
    
    topRatios(array, operator) {
        const arrayReceived = array;
        const arrayLength = arrayReceived.length;
        const finalJson = [];
        const numberShow = 6;
        const stop = arrayLength - numberShow;
        
        if (operator === 'DY') {
            
            for (let i = stop; i < arrayLength; i++) {
                finalJson.push(arrayReceived[i]);
            }
            
            return JSON.stringify(finalJson.reverse());
            
        } else if (operator === 'PRICE') {
            
            for (let i = 0; i < arrayLength; i++) {
                if (parseFloat(arrayReceived[i].DY) === 0) {
                } else {
                    finalJson.push(arrayReceived[i]);   
                    if (finalJson.length === numberShow) {
                        
                        return JSON.stringify(finalJson.reverse());
                        
                    }
                }
            }
        
        } else if (operator === 'ROE') {
            
            for (let i = stop; i < arrayLength; i++) {
                finalJson.push(arrayReceived[i]);
            }
            
            return JSON.stringify(finalJson.reverse());
        
        } else if (operator === 'ROA') {
            
            for (let i = stop; i < arrayLength; i++) {
                finalJson.push(arrayReceived[i]);
            }
            
            return JSON.stringify(finalJson.reverse());
            
        } else if (operator === 'PVP') {
            
            for (let i = 0; i < arrayLength; i++) {
                
                if (parseFloat(arrayReceived[i]['P/VP'].replace(',', '.')) != 1) {
                } else {
                    finalJson.push(arrayReceived[i]);
                    if (finalJson.length === numberShow) {

                        return JSON.stringify(finalJson.reverse());
                        
                    }
                }
            }
        }
    },
    
    fiiTopDy: function (fii) { return this.orderByDY(fii) },
    fiiTopPrice: function (fii) { return this.orderByPrice(fii) },
    fiiTopPvp: function (fii) { return this.removeNullPvp(fii) },

    stockTopDy: function (stock) { return this.orderByDY(stock) },
    stockTopRoe: function (stock) { return this.orderByROE(stock) },
    stockTopRoa: function (stock) { return this.orderByROA(stock) },
}

module.exports = {

    JSONArray,
    
    async datas(req, res) {
        try {
            const stock = await csv(attr).fromFile(csvAcoes);
            const fii = await csv(attr).fromFile(csvFii);
            
            return res.send(JSONArray.stockTopRoa(stock));
        } catch (err) {
            console.log(err);
        }
    }

}