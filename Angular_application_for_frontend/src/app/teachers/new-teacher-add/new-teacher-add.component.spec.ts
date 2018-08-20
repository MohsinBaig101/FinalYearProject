import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeacherAddComponent } from './new-teacher-add.component';

describe('NewTeacherAddComponent', () => {
  let component: NewTeacherAddComponent;
  let fixture: ComponentFixture<NewTeacherAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeacherAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
