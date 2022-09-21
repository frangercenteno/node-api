const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    
    if(apiKey === 'api-test-01') {
      next();
    } else {
      res.status(403);
      res.send({ error: 'ERROR_API_KEY' });
    }

  } catch (_) {
    res.status(403);
    res.send({ error: "ERROR_HEADER" })
  }
}

module.exports = customHeader;
