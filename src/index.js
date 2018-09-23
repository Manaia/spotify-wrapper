import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
  searchTracks
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks
} from './album';

import { API_URL } from './config';
/*module.exports = {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
  searchTracks,
  getAlbum,
  getAlbums,
  getAlbumTracks
}*/

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }
}
