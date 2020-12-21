import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongPollingRequestComponent } from './long-polling-request.component';

describe('LongPollingRequestComponent', () => {
  let component: LongPollingRequestComponent;
  let fixture: ComponentFixture<LongPollingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongPollingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongPollingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
