import { Injectable } from '@angular/core';

import { Music } from './music';
import {HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  constructor(private http:HttpClient) { }

  private musicsUrl = 'http://localhost:3000/api/musics';

  getMusics() : Promise<void | Music[]> {
    return this.http.get(this.musicsUrl)
    .toPromise()
    .then(response => response as Music[])
    .catch(this.handleError);
  }

  getSingleMusic(musicId: string): Promise<void | Music>{
    return this.http.get(this.musicsUrl + '/' + musicId)
      .toPromise()
      .then(response => response as Music)
      .catch(this.handleError);
  }

  createMusic(newMusic: Music): Promise<void | Music> {
    return this.http.post(this.musicsUrl, newMusic)
      .toPromise()
      .then(response => response as Music)
      .catch(this.handleError);
  }

  update_music : Music;

  updateMusic(newMusic: Music): Promise<void | Music> {
    return this.http.put(this.musicsUrl + '/' + this.update_music._id, newMusic)
      .toPromise()
      .then(response => response as Music)
      .catch(this.handleError);
  }

  deleteMusic(musicId: string) : Promise<void | Music> {
    return this.http.delete(this.musicsUrl + '/' + musicId)
      .toPromise()
      .then(response => response as Music)
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.log("Error");
  }
}
