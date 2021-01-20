const express = require('express');
const app = express();
const path = require('path');
const convertFile = require('./convertFile.js');
const pages = require('./pages.js')

app
    .use(express.static('public'))

    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    .get('/', pages.index)
    .get('/list', pages.list)

    .get('/acoes', convertFile.datas)

    .listen(3000, console.log('Server is running! (:'))