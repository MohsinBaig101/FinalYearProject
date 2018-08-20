import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersWeidgetComponent } from './teachers-weidget.component';

describe('TeachersWeidgetComponent', () => {
  let component: TeachersWeidgetComponent;
  let fixture: ComponentFixture<TeachersWeidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersWeidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersWeidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
