const getApiStatus = (req, res) => {
  res.json({
    success: true,
    message: "Mahra Dictionary API is running"
  });
};

module.exports = {
  getApiStatus
};
