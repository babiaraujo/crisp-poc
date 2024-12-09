require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  jarvis: {
    apiUrl: process.env.JARVIS_API_URL,
    apiKey: process.env.JARVIS_API_KEY,
  },
  crisp: {
    websiteId: process.env.CRISP_WEBSITE_ID,
    apiToken: process.env.CRISP_API_TOKEN,
  },
};
