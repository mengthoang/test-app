var express = require('express');
const axios = require('axios')
var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});
app.get('/test', async (req, res) => {
    var result = await getBreeds();
    res.status(200).json(result);
});
const getBreeds = async () => {
    try {
      return await axios.get('https://trialsolertiae.beta.tpsdb.com/api/Organizations', {
          Headers: {
              "Authorization": "Basic YXBpdGVzdDpQXnNpYTFxJDh0SGlEVips"
          }
      })
    } catch (error) {
      console.error(error)
    }
  }
app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});