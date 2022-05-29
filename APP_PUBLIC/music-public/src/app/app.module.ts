import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MusicListComponent } from './music-list/music-list.component';

import { APP_BASE_HREF } from '@angular/common';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    MusicListComponent,
    FrameworkComponent,
    HomeComponent,
    HeaderComponent,
    DetailsPageComponent,
    CreateComponent,
    AboutComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      
      {
        path: 'list',
        component: MusicListComponent
      },
      {
        path: 'musics/:musicsid',
        component: DetailsPageComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'update/:musicsid',
        component:UpdateComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
