global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCUjQMFF7P9QmixELPXGHwoB6sb0qf6C2ZtnGVXWiADFCUIsWo6_6U2PWoh4uB3XGIv8w6OtYYg79KmSKZas',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data));
