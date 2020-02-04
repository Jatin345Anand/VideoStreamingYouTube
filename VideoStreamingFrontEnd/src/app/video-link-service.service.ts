import { Injectable } from '@angular/core';
import { CourseVideoClass } from './courseVideoClass';
@Injectable({
  providedIn: 'root'
})
export class VideoLinkServiceService {

  public AngularVideoLink:string;
  public CppVideoLink:string;
  public NodeJSVideoLink:string;
  
  public LinkSendtoVideoPlayer:string;
  public WelcomeVideos:CourseVideoClass[]=[];
  public Installing_and_Exploring_NodejsVideos:CourseVideoClass[]=[];
  public Nodejs_Module_System_Notes_AppVideos:CourseVideoClass[]=[];
  
  constructor() {
    this.LinkSendtoVideoPlayer = 'https://drive.google.com/file/d/1k917QKprRl6hQXOw0_9uUEdFpHCq1LK5/preview';
  
     this.WelcomeVideos.push(new CourseVideoClass('1. Welcome to the Class!.mp4','https://drive.google.com/file/d/1k917QKprRl6hQXOw0_9uUEdFpHCq1LK5/preview','6:58'));
     this.WelcomeVideos.push(new CourseVideoClass('2. Grab the PDF Guide.mp4','https://drive.google.com/file/d/15yUjMtOVos7llABvLKCa4mJplcBjl0pw/preview','1:04'));
    // Folder First Array of Object
     this.Installing_and_Exploring_NodejsVideos.push(new CourseVideoClass('1. Section Intro Installing and Exploring Node.js.mp4',
    'https://drive.google.com/file/d/1Tfkil6ffwx9vT96p8tXS0rbrvYGm7fa3/preview','0:56'));
    this.Installing_and_Exploring_NodejsVideos.push(new CourseVideoClass('2. Installing Node.js and Visual Studio Code.mp4',
    'https://drive.google.com/file/d/1-YyxFJi4GbCkJNbiIBx-x1v3jxJnng8E/preview','8:51'));
    this.Installing_and_Exploring_NodejsVideos.push(new CourseVideoClass('3. What is Node.js.mp4',
    'https://drive.google.com/file/d/1HBPgegLLL08dsekJXrLUt-RvKQ7waMj2/preview','15:31'));
    this.Installing_and_Exploring_NodejsVideos.push(new CourseVideoClass('4. Why Should I Use Node.js.mp4',
    'https://drive.google.com/file/d/14hPuhk4RJDllEG6pbl3X5iHJN_V0pcvg/preview','16:24'));
    this.Installing_and_Exploring_NodejsVideos.push(new CourseVideoClass('5. Your First Node.js Script.mp4',
    'https://drive.google.com/file/d/1bLBj-d29luv0LHyRHbH1naKsZ6e4ivdR/preview','0:56'));
    // Folder Second Array of Object
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('1. Section Intro Node.js Module System.mp4',
    'https://drive.google.com/file/d/1Z38oQ61hcljFfz2VIrwaFl0TKG4Ow3tr/preview','1:03'));
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('2. Importing Node.js Core Modules.mp4',
    'https://drive.google.com/file/d/1Eqfev9YW9S1fu95j2DWR-JZxIWOIAsFb/preview','16:28'));
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('3. Importing Your Own Files.mp4',
    'https://drive.google.com/file/d/1LlQuUIRuJRPZ6ahcOJcOiS6DAdxYE2We/preview','16:35'));
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('4. Importing npm Modules.mp4',
    'https://drive.google.com/file/d/1l444uyq66KLQwU9zt0VmHFoOcUurhTFF/preview','16:57'));
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('5. Printing in Color.mp4',
    'https://drive.google.com/file/d/1TqKi8i81Q1u5dDI61eDX6bqBDdbUcmtv/preview','14:23'));
    this.Nodejs_Module_System_Notes_AppVideos.push(new CourseVideoClass('6. Global npm Modules and nodemon.mp4',
    'https://drive.google.com/file/d/1r47bBGA3Sp7MEeKO7jUb_AsKrdnsbcJc/preview','7:22'));
  // Folder Third Array of Object
  }
  TakeArrayofVideosbyContentName(ContentName):CourseVideoClass[]{
     if(ContentName=='Welcome'){
       return this.WelcomeVideos;
     }
     if(ContentName=='Installing and Exploring Node.js'){
       return this.Installing_and_Exploring_NodejsVideos;
     }
     if(ContentName=='Node.js Module System (Notes App)'){
       return this.Nodejs_Module_System_Notes_AppVideos;
     }
  }
  PlayVideoinVideoPlayer(CourseVideoName,VL):string{
    // console.log(this.WelcomeVideos);
    // console.log(this.Nodejs_Module_System_Notes_AppVideos);
    // console.log(this.Installing_and_Exploring_NodejsVideos);
    console.log(CourseVideoName,VL);
    for(let i=0;i<VL.length;i++){
        if(VL[i].VideoName==CourseVideoName){
          console.log(VL[i]);
          this.LinkSendtoVideoPlayer = VL[i].SharableLink;
        }
    }
    // if(CourseVideoName=='Introduction to NodeJS'){
    //   this.LinkSendtoVideoPlayer = this.NodeJSVideoLink; 
    //   return this.NodeJSVideoLink;
    // }
    // if(CourseVideoName=='What is Angular?'){
    //   this.LinkSendtoVideoPlayer = this.AngularVideoLink;
    //   return this.AngularVideoLink;
    // }
    // if(CourseVideoName=='Introduction to c++'){
    //   this.LinkSendtoVideoPlayer = this.CppVideoLink;
    //   return this.CppVideoLink;
    // }
    return this.LinkSendtoVideoPlayer;
  }
}
