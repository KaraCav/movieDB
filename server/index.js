const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');
const { apiKey, apiURL } = require('../config');

//Initialize server
const app = express();
const port = 3001;

//Middlewares
app.use(cors());
app.use(json());

//Endpoints
app.get('/api/popular/movies', (req, res, next) => {
  axios.get(`${apiURL}/movie/popular${apiKey}`).then(response => {
    res.status(200).json(response.data);
  });
});
//
app.listen(port, () => console.log(`Server is listening on port ${port}`));
