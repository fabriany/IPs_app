const IPsRouter = require('./IPs.router');

function routerAPI(app) {
  app.use('/ips', IPsRouter);
}

module.exports = routerAPI;
