import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramesComponent } from './programes.component';

describe('ProgramesComponent', () => {
  let component: ProgramesComponent;
  let fixture: ComponentFixture<ProgramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
