import { TestBed } from '@angular/core/testing';

import { VideoLinkServiceService } from './video-link-service.service';

describe('VideoLinkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoLinkServiceService = TestBed.get(VideoLinkServiceService);
    expect(service).toBeTruthy();
  });
});
