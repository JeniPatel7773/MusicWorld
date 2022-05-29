import { Component, OnInit } from '@angular/core';

import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MusicServiceService]
})
export class CreateComponent implements OnInit {

  public newMusic: Music = {

    _id: '',
    song_name: '',
    artist: {
      artist_name: '',
      age: null,
      gender: ''
    },
    duration: '',
    lyricist: '',
    language: '',
    rating: null,
    released_on: null
  }
  constructor(private musicService : MusicServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  public createNewMusic(newMusic: Music): void {
    
    if(newMusic.song_name && newMusic.artist.artist_name && newMusic.duration && newMusic.language && newMusic.released_on !== null){
      this.musicService.createMusic(newMusic);

      alert(newMusic.song_name + " music has been created successfully.");
      this.router.navigateByUrl('/list');
    }
    else {
      alert("Please fill all the required fields.")
    }
  }

}
