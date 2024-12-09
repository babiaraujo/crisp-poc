const axios = require('axios');
const { crisp } = require('../config/env');

async function sendMessage(sessionId, message) {
  try {
    const url = `https://api.crisp.chat/v1/website/${crisp.websiteId}/conversation/${sessionId}/message`;

    const response = await axios.post(
      url,
      { type: 'text', content: message },
      { headers: { Authorization: `Bearer ${crisp.apiToken}` } }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to send message. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem para o Crisp:', error.message);
    throw new Error('Falha ao enviar mensagem para o Crisp.');
  }
}

module.exports = { sendMessage };
