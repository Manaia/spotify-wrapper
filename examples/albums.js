global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQC0cYGJ7mzEbN5A32xfGcGSplCZTS7hdTXYWYugSbVACnkohK7QuL_StrSSEhrwiWfXgSuHyC1GNna2ZnMSraaF1yTy5aa7-42v-4Xr3oDDKwcUJv8HeI8zQOhUFrzXmprFV2brpapP06dRsCEmHw',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data));
