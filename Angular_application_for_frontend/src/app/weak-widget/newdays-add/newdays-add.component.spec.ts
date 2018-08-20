import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdaysAddComponent } from './newdays-add.component';

describe('NewdaysAddComponent', () => {
  let component: NewdaysAddComponent;
  let fixture: ComponentFixture<NewdaysAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdaysAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdaysAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
