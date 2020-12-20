import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AJAXRequestingComponent } from './ajaxrequesting.component';

describe('AJAXRequestingComponent', () => {
  let component: AJAXRequestingComponent;
  let fixture: ComponentFixture<AJAXRequestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AJAXRequestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AJAXRequestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
