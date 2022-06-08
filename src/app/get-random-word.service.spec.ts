import { TestBed } from '@angular/core/testing';
import { GetRandomWordService } from './get-random-word.service';

describe('GetRandomWordService', () => {
  let service: GetRandomWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});