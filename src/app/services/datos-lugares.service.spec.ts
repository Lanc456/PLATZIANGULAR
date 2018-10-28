import { TestBed } from '@angular/core/testing';

import { DatosLugaresService } from './datos-lugares.service';

describe('DatosLugaresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosLugaresService = TestBed.get(DatosLugaresService);
    expect(service).toBeTruthy();
  });
});
