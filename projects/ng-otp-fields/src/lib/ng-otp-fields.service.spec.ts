import { TestBed } from '@angular/core/testing';

import { NgOtpFieldsService } from './ng-otp-fields.service';

describe('NgOtpFieldsService', () => {
  let service: NgOtpFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOtpFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
