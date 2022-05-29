import { Component, OnInit } from '@angular/core';

import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private musicService: MusicServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

    newMusic: Music;

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.musicService.getSingleMusic(params.musicsid);
    }))
    .subscribe((newMusic:Music) => {
      this.newMusic = newMusic;
    });
  }

  updateMusic(music: Music){
    if(music.song_name && music.artist.artist_name && music.duration && music.language && music.released_on !== null){
      this.musicService.update_music = music;
      this.musicService.updateMusic(music);
   
      alert("updated successfully.");
      window.location.assign('/list');
    }
    else {
      alert("Please fill all the required fields.");
    }
    
    
  }

}
