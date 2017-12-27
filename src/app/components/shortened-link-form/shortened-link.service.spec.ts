import { TestBed, inject } from '@angular/core/testing';

import { ShortenedLinkService } from './shortened-link.service';

describe('ShortenedLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortenedLinkService]
    });
  });

  it('should be created', inject([ShortenedLinkService], (service: ShortenedLinkService) => {
    expect(service).toBeTruthy();
  }));
});
