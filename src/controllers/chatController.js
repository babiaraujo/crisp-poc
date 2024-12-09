const chatbaseService = require('../services/chatbaseService');
const crispService = require('../services/crispService');

async function handleCrispWebhook(req, res, next) {
  try {
    const { message, session_id } = req.body;

    if (!message || !session_id) {
      return res.status(400).json({ error: 'Message and session_id are required.' });
    }

    console.log(`Mensagem recebida do Crisp: "${message}"`);

    const chatbaseResponse = await chatbaseService.processMessage(message);

    await crispService.sendMessage(session_id, chatbaseResponse);

    return res.status(200).json({ success: true, message: 'Mensagem processada.' });
  } catch (error) {
    next(error); 
  }
}

module.exports = { handleCrispWebhook };
