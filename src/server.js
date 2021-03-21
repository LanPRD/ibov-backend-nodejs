const express = require('express');
const app = express();
const path = require('path');
const DownloadCsvFile = require('./services/DownloadCsvFile');

const routes = require('./routes');

app
    .use(express.static('public'))

    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    .use(routes)

    .listen(3000, async () => {
        const downloadCsvFile = new DownloadCsvFile();
        const promiseDownload = downloadCsvFile.run();

        console.log(promiseDownload);

        console.log('Server is running! (:');
    });