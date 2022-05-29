import { Component, OnInit } from '@angular/core';

import { MusicServiceService } from './../music-service.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  providers: [MusicServiceService]
})
export class MusicListComponent implements OnInit {

  musics: any

  constructor(private musicService : MusicServiceService) { }

  ngOnInit(): void {
    this.musicService
      .getMusics()
      .then((musics: any) => {
        this.musics = musics.map((music: any) => {
          return music;
        });
      });
  }

}

