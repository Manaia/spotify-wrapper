global.fetch = require('node-fetch');

import {searchAlbuns} from '../src/main';

const albums = searchAlbuns('Incubus');

albums.then(data => console.log(data));
