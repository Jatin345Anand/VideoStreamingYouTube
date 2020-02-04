import { Component, OnInit,Input } from '@angular/core';
import { CourseVideoClass } from '../../../../CourseVideoClass';
import { VideoLinkServiceService } from '../../../../video-link-service.service'
@Component({
  selector: 'app-course-videos',
  templateUrl: './course-videos.component.html',
  styleUrls: ['./course-videos.component.css']
})
export class CourseVideosComponent implements OnInit {
 
  @Input()
  vn:CourseVideoClass;

  @Input()
  VideoNameList2:CourseVideoClass[];
  constructor(private PlayVideoService:VideoLinkServiceService) { 

  }

  ngOnInit() {
  }
  AC(event:Event):void{
    console.log('clicked... ',event );
  }
  PLAYVIDEO(CourseName,VL):void{
    console.log(this.VideoNameList2);
    
    this.PlayVideoService.PlayVideoinVideoPlayer(CourseName,VL);
  }
}
