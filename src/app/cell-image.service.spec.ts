import { TestBed } from '@angular/core/testing';

import { CellImageService } from './cell-image.service';

describe('CellImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CellImageService = TestBed.get(CellImageService);
    expect(service).toBeTruthy();
  });
});
