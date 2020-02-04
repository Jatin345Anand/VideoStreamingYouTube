import { Component, OnInit, Input } from '@angular/core';
import { CourseNameClass } from '../../../courseNameClass';
import { CourseVideoClass } from '../../../courseVideoClass';
import { VideoLinkServiceService } from '../../../video-link-service.service';
@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent implements OnInit {
  
  @Input()
  vcn:CourseNameClass;
  public isShowVideos:boolean;
  public VideoNameObj:CourseVideoClass;
  public VideoNameList2:CourseVideoClass[]=[];
  constructor(private PlayVideo:VideoLinkServiceService) { 
    this.isShowVideos=true;
    // this.VideoNameList2.push(new CourseVideoClass('Introduction to NodeJS','12:23','https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/preview'));
    // this.VideoNameList2.push(new CourseVideoClass('What is Angular?','02:43','https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/preview'));
    // this.VideoNameList2.push(new CourseVideoClass('Introduction to c++','22:53','https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/preview'));
    // this.VideoNameList2.push(new CourseVideoClass('Concepts of Angular!','02:03','https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/preview'));
    // this.VideoNameList2.push(new CourseVideoClass('Must to Have Concepts of NodeJS','09:13','https://drive.google.com/file/d/1a5LoABOwngHDDtsrNBMeK8VaR_6JZH5x/preview'));
    
  }
  isClickCourseName(ContentName){
    console.log(ContentName);
    this.VideoNameList2 = this.PlayVideo.TakeArrayofVideosbyContentName(ContentName);
    console.log(this.VideoNameList2);
    if(this.isShowVideos){
      this.isShowVideos=!this.isShowVideos;
    }
    else{
      this.isShowVideos=!this.isShowVideos;
    }
  }
  ngOnInit() {
  }

}
