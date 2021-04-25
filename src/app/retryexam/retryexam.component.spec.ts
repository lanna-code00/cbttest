import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryexamComponent } from './retryexam.component';

describe('RetryexamComponent', () => {
  let component: RetryexamComponent;
  let fixture: ComponentFixture<RetryexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
