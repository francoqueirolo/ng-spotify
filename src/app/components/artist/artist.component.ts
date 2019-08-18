import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private activateRouter: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loadingArtist = true;

    this.activateRouter.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtista(id).subscribe(artist => {
         this.artist = artist;
         this.loadingArtist = false;
        });
  }

  getTopTracks(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
      console.log(this.topTracks);
    });
  }

}
