const IPsRouter = require('./IPs.router');

function routerAPI(app) {
  app.use('/IPs', IPsRouter);
}

module.exports = routerAPI;
