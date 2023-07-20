const express = require('express');
const routerApi = require('./router');
const initDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
routerApi(app);

app.use(express.json());
const DIRECTORIO_PERMITIDO_CORS = "https://turingcol.com";
app.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port);
initDB();


