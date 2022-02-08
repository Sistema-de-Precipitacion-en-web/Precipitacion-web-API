function response({ res, ok = true, status = 200, message = "", data = {} }) {
  res.status(status).json({
    ok,
    message,
    data,
  });
}

module.exports = response;
