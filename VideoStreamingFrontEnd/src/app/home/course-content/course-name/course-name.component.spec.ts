import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNameComponent } from './course-name.component';

describe('CourseNameComponent', () => {
  let component: CourseNameComponent;
  let fixture: ComponentFixture<CourseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
