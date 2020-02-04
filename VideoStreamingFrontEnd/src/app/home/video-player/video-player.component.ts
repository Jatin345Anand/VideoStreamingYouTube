import { Component, OnInit } from '@angular/core';
import { VideoLinkServiceService } from '../../video-link-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

   
  public LINK:string='https://drive.google.com/file/d/1_qJ0YzFaaYpnspE8Age6Mht3OyNyTnll/preview';
  constructor(private PlayVideo:VideoLinkServiceService,private sanitizer: DomSanitizer) {
  //  this.LINK= this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1_qJ0YzFaaYpnspE8Age6Mht3OyNyTnll/preview');
     this.videoURL();
    
  }

  ngOnInit() {
  }
  videoURL(){
    this.LINK = this.PlayVideo.LinkSendtoVideoPlayer;
    console.log('Current URL ',this.LINK);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.LINK);
  }

}
