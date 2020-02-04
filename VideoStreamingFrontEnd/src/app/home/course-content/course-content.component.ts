import { Component, OnInit } from '@angular/core';
import { CourseNameClass } from '../../courseNameClass'
import { Input } from '@angular/core'; 
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  @Input()
  CourseNameList1:CourseNameClass[];
  
  public CourseNameObj:CourseNameClass;
  public CourseNameList2:CourseNameClass[]=[];

  constructor(
  ) { 
    this.CourseNameList2.push(new CourseNameClass('Welcome',2));
    this.CourseNameList2.push(new CourseNameClass('Installing and Exploring Node.js',5));
    this.CourseNameList2.push(new CourseNameClass('Node.js Module System (Notes App)',6));
    // this.CourseNameList1.push(new CourseNameClass('NodeJs',3));
    // this.CourseNameList1.push(new CourseNameClass('C++',4));
    // this.CourseNameList1.push(new CourseNameClass('Angular',7));
   console.log(this.CourseNameList2);  
  }
  
  ngOnInit() {
  }
  
}
