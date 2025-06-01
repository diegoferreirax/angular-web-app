import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuSubject = new Subject<void>();
  readonly toggleObservable = this.menuSubject.asObservable();

  readonly isMobile = signal(false);
  readonly menuOpened = signal(true);

  readonly navegations = [
    {
      name: 'Clients',
      icon: 'person',
      route: '/clients'
    },
    {
      name: 'About',
      icon: 'info',
      route: '/about'
    }
  ];

  toggleMenu() {
    this.menuSubject.next();
  }

  toggleMobileMenu() {
    if (this.isMobile()) {
      this.menuSubject.next();
    }
  }
}
