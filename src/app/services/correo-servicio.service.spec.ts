import { TestBed } from '@angular/core/testing';

import { CorreoServicioService } from './correo-servicio.service';

describe('CorreoServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorreoServicioService = TestBed.get(CorreoServicioService);
    expect(service).toBeTruthy();
  });
});
