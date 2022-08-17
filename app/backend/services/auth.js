require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  generateToken: (data) => (jwt.sign(data, SECRET, jwtconfig)),
  checkToken: (token) => {
    try {
      const verified = jwt.verify(token, SECRET);
      return verified;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
