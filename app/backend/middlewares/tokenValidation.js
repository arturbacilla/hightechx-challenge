const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');
const auth = require('../services/auth');

const msgs = {
  NEED_TOKEN: 'Token not found.',
  TOKEN_INVALID: 'Token is expired or invalid.',
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(UNAUTHORIZED).json({ message: msgs.NEED_TOKEN });
  const isTokenValid = auth.checkToken(token);
  if (!isTokenValid) return res.status(UNAUTHORIZED).json({ message: msgs.TOKEN_INVALID });
  next();
};

module.exports = validateToken;
