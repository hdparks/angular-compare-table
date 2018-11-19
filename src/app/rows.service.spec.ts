import { TestBed } from '@angular/core/testing';

import { RowsService } from './rows.service';

describe('RowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RowsService = TestBed.get(RowsService);
    expect(service).toBeTruthy();
  });
});
