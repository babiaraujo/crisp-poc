const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config/env');
const { handleCrispWebhook } = require('./controllers/chatController');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.post('/crisp-webhook', handleCrispWebhook);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
