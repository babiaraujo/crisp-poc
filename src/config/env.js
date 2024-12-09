require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  CHATBASE: {
    apiUrl: process.env.CHATBASE_API_URL,
    apiKey: process.env.CHATBASE_API_KEY,
  },
  crisp: {
    websiteId: process.env.CRISP_WEBSITE_ID,
    apiToken: process.env.CRISP_API_TOKEN,
  },
};
