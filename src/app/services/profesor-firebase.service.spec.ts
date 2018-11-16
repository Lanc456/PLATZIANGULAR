import { TestBed } from '@angular/core/testing';

import { ProfesorFirebaseService } from './profesor-firebase.service';

describe('ProfesorFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesorFirebaseService = TestBed.get(ProfesorFirebaseService);
    expect(service).toBeTruthy();
  });
});
