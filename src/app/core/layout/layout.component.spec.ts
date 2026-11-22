import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { MaterialModule } from 'modules/material.module';
import { MediaMatcher } from '@angular/cdk/layout';

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

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent, MaterialModule],
      providers: [
        provideRouter(routes),
        { provide: MediaMatcher, useValue: { matchMedia: () => mobileQueryList } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
