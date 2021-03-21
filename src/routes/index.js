const routes = require('express').Router();

const indexRouter = require('./index.routes');
const listRouter = require('./list.routes');
const stocksRouter = require('./stocks.routes');
const fiisRouter = require('./fiis.routes');
const statistics = require('./datas.routes')

routes.use('/', indexRouter);
routes.use('/list', listRouter);
routes.use('/stocks', stocksRouter);
routes.use('/fiis', fiisRouter);
routes.use('/statistics', statistics);

module.exports = routes;