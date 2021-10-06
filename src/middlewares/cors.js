module.exports = (request, response, next) => {
  response.setHeader('Access-control-allow-origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.seteHeader('Access-Control-Max-Age', '-1');
  next();
};
