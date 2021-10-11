// basic setup for server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🎉 Server is running on ${PORT}! 🎉`);
});

module.exports = app;
