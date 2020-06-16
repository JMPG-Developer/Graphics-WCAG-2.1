import { TestBed } from '@angular/core/testing';

import { MicrostrategyService } from './microstrategy.service';

describe('MicrostrategyService', () => {
  let service: MicrostrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrostrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
