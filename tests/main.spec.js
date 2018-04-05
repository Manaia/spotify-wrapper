import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbuns, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Manager', () => {
  describe('Smoke Tests', () => {
      // search (genérico) de + de um tipo
      // searchAlbuns
      // searchArtists
      // searchTracks
      // searchPlaylists
      it('should exists the search method', () => {
        expect(search).to.exist;
      });

      it('should exists the searchAlbuns method', () => {
        expect(searchAlbuns).to.exist;
      });

      it('should exists the searchArtists method', () => {
        expect(searchArtists).to.exist;
      });

      it('should exists the searchTracks method', () => {
        expect(searchTracks).to.exist;
      });

      it('should exists the searchPlaylists method', () => {
        expect(searchPlaylists).to.exist;
      });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();fetchedStub
    })

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search('Incubus', 'artist');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const albums = search('Incubus', 'album');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

    });
  });
});
