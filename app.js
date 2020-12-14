require("dotenv").config();
require("./config/mongo");

const express = require("express");
const hbs = require("hbs");
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');


// HBS/VIEWS SET UP
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

// SPOTIFY SET UP
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

// SET PREFIXES FOR ROUTES BELOW:


// LISTEN
app.listen(process.env.PORT, () => {
    console.log("let's roooock @ http://localhost:" + process.env.PORT);
  });

// POSSIBLE EXPORTS
module.exports = app;