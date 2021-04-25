import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingpageComponent } from './readingpage.component';

describe('ReadingpageComponent', () => {
  let component: ReadingpageComponent;
  let fixture: ComponentFixture<ReadingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
