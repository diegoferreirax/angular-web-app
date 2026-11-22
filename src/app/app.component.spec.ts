import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { provideRouter } from '@angular/router';

const mobileQueryList = {
  matches: false,
  media: '(max-width: 600px)',
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true
} as MediaQueryList;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: MediaMatcher, useValue: { matchMedia: () => mobileQueryList } }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
