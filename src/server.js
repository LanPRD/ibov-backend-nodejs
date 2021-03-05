const express = require('express');
const app = express();
const path = require('path');
const convertFile = require('../public/scripts/convertFile.js');
const pages = require('./pages.js');

app
    .use(express.static('public'))

    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    .get('/', pages.index)
    .get('/list', pages.list)
    .get('/stocks', pages.stocks)
    .get('/fiis', pages.fiis)

    .get('/statics', convertFile.datas)

    .listen(3000, console.log('Server is running! (:'));