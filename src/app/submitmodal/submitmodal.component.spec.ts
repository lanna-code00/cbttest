import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitmodalComponent } from './submitmodal.component';

describe('SubmitmodalComponent', () => {
  let component: SubmitmodalComponent;
  let fixture: ComponentFixture<SubmitmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
