require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const ALTEGIO_API_BASE = process.env.ALTEGIO_API_BASE; // например: https://api.alteg.io
const ALTEGIO_BEARER = process.env.ALTEGIO_BEARER; // токен API

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${ALTEGIO_API_BASE}/v1/some_endpoint`, {
      headers: { Authorization: `Bearer ${ALTEGIO_BEARER}` }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
