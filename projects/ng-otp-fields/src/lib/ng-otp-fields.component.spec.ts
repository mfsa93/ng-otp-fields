import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtpFieldsComponent } from './ng-otp-fields.component';

describe('NgOtpFieldsComponent', () => {
  let component: NgOtpFieldsComponent;
  let fixture: ComponentFixture<NgOtpFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOtpFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtpFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
