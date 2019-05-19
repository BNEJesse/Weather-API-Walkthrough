const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:cc/:city', (req, res) => {
  //   res.send('weather');
  const { cc, city } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=3114e860a38cebb221575bb046d93fce`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
