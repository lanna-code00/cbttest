import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetforstudentsComponent } from './setforstudents.component';

describe('SetforstudentsComponent', () => {
  let component: SetforstudentsComponent;
  let fixture: ComponentFixture<SetforstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetforstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetforstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
