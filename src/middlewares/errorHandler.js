function errorHandler(err, req, res, next) {
    console.error('Erro:', err.message);
    res.status(500).json({
      success: false,
      message: err.message || 'Erro interno no servidor.',
    });
  }
  
  module.exports = errorHandler;
  