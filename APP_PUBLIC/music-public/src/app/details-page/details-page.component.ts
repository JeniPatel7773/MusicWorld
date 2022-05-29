import { Component, OnInit } from '@angular/core';

import { Music } from '../music';
import { MusicServiceService } from '../music-service.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MusicServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private musicService: MusicServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  newMusic: Music;

  pageContent = {
    header: {
      title: ''
    }
  };

  ngOnInit(): void {

    this.route.params.pipe(switchMap((params: Params) => {
      return this.musicService.getSingleMusic(params.musicsid);
    }))
    .subscribe((newMusic:Music) => {
      this.newMusic = newMusic;
      this.pageContent.header.title=newMusic.song_name;
    });
  }


  onDelete(_id: string){
    if(confirm('Are you sure to delete this record ?') == true) {
      this.musicService.deleteMusic(_id);
      location.assign('/list');
      alert("Music "+this.newMusic.song_name+" has been succesfully deleted.");
    }
  }

}



