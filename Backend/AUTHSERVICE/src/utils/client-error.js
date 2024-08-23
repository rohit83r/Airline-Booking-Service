const AppErrors = require('./error-handler');

class ClientError extends AppErrors {
  constructor(name, message, explanation, statusCode) {
    super(name, message, explanation, statusCode);
  }
}

module.exports = ClientError;
