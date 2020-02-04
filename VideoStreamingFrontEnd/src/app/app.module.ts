import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlayerComponent } from './home/video-player/video-player.component';
import { CourseContentComponent } from './home/course-content/course-content.component';
import { VideoLinkServiceService } from './video-link-service.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { CourseNameComponent } from './home/course-content/course-name/course-name.component';
import { CourseVideosComponent } from './home/course-content/course-name/course-videos/course-videos.component';
// import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VideoPlayerComponent,
    CourseContentComponent,
    FooterComponent,
    CourseNameComponent,
    CourseVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [VideoLinkServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
