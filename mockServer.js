const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// new API route: GET feeds, returning a list of feeds
app.get('/getFeeds', (request, response) => {
  const obj = fs.readFileSync(path.resolve(`json/getFeeds.json`));
  const json = JSON.parse(obj);
  response.json(json);
});


app.listen(3001, () => {console.log("MockServer running in 3001 port");});