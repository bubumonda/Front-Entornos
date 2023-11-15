import { TestBed } from '@angular/core/testing';

import { CrudDatasetsService } from './crud-datasets.service';

describe('CrudDatasetsService', () => {
  let service: CrudDatasetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDatasetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
