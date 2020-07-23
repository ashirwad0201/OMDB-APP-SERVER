const express = require('express');
const router = express.Router();
const axios=require('axios');
const apiKey = '85a21933';

/* GET users listing. */
router.get('/search', function(req, res, next) {
  const search =req.query.title;
  const url = 'http://www.omdbapi.com/?apikey='+apiKey+'&s='+search;
  console.log('trying to connect '+url);

// Make a request for a user with a given ID
  axios.get(url)
    .then(function (response) {
      // handle success
      
    res.send(response.data)
    console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      res.send(error);
    })
  });

router.get('/result/:imdbId', function(req, res, next) {
  const imdbId=req.params.imdbId;

  const url = 'http://www.omdbapi.com/?apikey='+apiKey+'&i='+imdbId;


// Make a request for a user with a given ID
  axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response)
      res.send(response.data)
    })
    .catch(function (error) {
      // handle error
      res.send(error);
    })
  });
module.exports = router;
