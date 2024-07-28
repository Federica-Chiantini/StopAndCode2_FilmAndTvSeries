import { TestBed } from '@angular/core/testing';

import { FilmSerieService } from './film-serie.service';

describe('FilmSerieService', () => {
  let service: FilmSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
