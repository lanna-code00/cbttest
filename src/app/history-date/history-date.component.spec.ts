import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDateComponent } from './history-date.component';

describe('HistoryDateComponent', () => {
  let component: HistoryDateComponent;
  let fixture: ComponentFixture<HistoryDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
