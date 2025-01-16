import { TestBed } from '@angular/core/testing';

import { FirestoreFacadeService } from './firestore-facade.service';

describe('FirestoreFacadeService', () => {
  let service: FirestoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
