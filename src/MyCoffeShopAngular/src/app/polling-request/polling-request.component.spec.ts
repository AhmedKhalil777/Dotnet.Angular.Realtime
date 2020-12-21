import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingRequestComponent } from './polling-request.component';

describe('PollingRequestComponent', () => {
  let component: PollingRequestComponent;
  let fixture: ComponentFixture<PollingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
