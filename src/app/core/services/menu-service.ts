import { Injectable, signal } from '@angular/core';
import { NavigationItem } from 'core/layout/navegation/navegation.type';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuSubject = new Subject<void>();
  readonly toggleObservable = this.menuSubject.asObservable();

  readonly isMobile = signal(false);
  readonly menuOpened = signal(true);

  readonly navegations: NavigationItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
      children: []
    },
    {
      name: 'UI',
      icon: 'settings',
      route: '/settings',
      children: [
        { name: 'Buttons', icon: 'smart_button', route: '/ui/buttons', children: [] },
        { name: 'Cards', icon: 'credit_card', route: '/ui/cards', children: [] },
        { name: 'Colors', icon: 'palette', route: '/ui/colors', children: [] },
        { name: 'Components', icon: 'widgets', route: '/ui/components', children: [] },
        { name: 'Forms', icon: 'assignment', route: '/ui/forms', children: [] },
        { name: 'Icons', icon: 'insert_emoticon', route: '/ui/icons', children: [] },
        { name: 'Typography', icon: 'text_fields', route: '/ui/typography', children: [] },
        { name: 'Tables', icon: 'table_chart', route: '/ui/tables', children: [] }
      ]
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
