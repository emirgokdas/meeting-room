// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.get('/', async (req, res) => {
  const url = 'https://outlook.office365.com/owa/calendar/b20f08db96a94310af0ab887899237a5@boyteks.com/956f46ee3d9e437f97b58448e4cd2e57266125492413786023/calendar.ics';
  try {
    const response = await axios.get(url);
    res.send(response.data);
 
  } catch (error) {
    res.status(500).send('Error fetching the ICS file');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
