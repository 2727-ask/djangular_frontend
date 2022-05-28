import { TestBed } from '@angular/core/testing';

import { CategoryInterceptorInterceptor } from './category-interceptor.interceptor';

describe('CategoryInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CategoryInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CategoryInterceptorInterceptor = TestBed.inject(CategoryInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
