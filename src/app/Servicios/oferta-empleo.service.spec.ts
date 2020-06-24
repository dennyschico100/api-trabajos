import { TestBed } from '@angular/core/testing';

import { OfertaEmpleoService } from './oferta-empleo.service';

describe('OfertaEmpleoService', () => {
  let service: OfertaEmpleoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaEmpleoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
