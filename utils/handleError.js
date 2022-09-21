const handleHttpError = (res, message = "Something Wrong", code = 403) => {
  res.status(code);
  res.send({ error: message });
}

module.exports = {
  handleHttpError,
}