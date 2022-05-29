import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  pageContent = {
    header: {
      title: 'Welcome to MusicStore',
      body: 'Listening is everything'
    }
  }

  ngOnInit(): void {
  }

}
