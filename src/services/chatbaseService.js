const axios = require('axios');
const { chatbase } = require('../config/env');

async function processMessage(message) {
  try {
    const response = await axios.post(
      chatbase.apiUrl,
      { prompt: message },
      { headers: { Authorization: `Bearer ${chatbase.apiKey}` } }
    );

    if (!response.data || !response.data.reply) {
      throw new Error('Invalid response from chatbase API.');
    }

    return response.data.reply;
  } catch (error) {
    console.error('Erro ao comunicar com chatbase:', error.message);
    throw new Error('Falha ao processar mensagem com a IA.');
  }
}

module.exports = { processMessage };
