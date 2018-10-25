import { TestBed } from '@angular/core/testing';

import { PeopleListService } from './people-list.service';

describe('PeopleListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleListService = TestBed.get(PeopleListService);
    expect(service).toBeTruthy();
  });
});
