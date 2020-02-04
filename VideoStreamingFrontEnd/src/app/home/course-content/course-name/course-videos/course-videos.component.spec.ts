import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVideosComponent } from './course-videos.component';

describe('CourseVideosComponent', () => {
  let component: CourseVideosComponent;
  let fixture: ComponentFixture<CourseVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
