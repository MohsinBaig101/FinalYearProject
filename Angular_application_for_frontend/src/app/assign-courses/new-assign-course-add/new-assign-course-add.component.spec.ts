import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseAddComponent } from './new-course-add.component';

describe('NewCourseAddComponent', () => {
  let component: NewCourseAddComponent;
  let fixture: ComponentFixture<NewCourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
