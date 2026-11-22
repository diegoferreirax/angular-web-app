import { Component, inject, ViewChild } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MaterialModule } from 'modules/material.module';
import { NavegationComponent } from './navegation/navegation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from 'core/services/menu-service';

@Component({
  selector: 'layout',
  imports: [
    RouterOutlet,
    MaterialModule,
    NavegationComponent,
    ToolbarComponent,
    FooterComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('snav') snav!: MatSidenav;

  readonly menuService = inject(MenuService);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');

    this.changeMenuState();
    this._mobileQueryListener = () => {
      this.changeMenuState();
    };
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.menuService.toggleObservable.subscribe(() => {
      this.snav.toggle();
      this.menuService.menuOpened.set(this.snav.opened);
    });
  }

  private changeMenuState(): void {
    this.menuService.isMobile.set(this._mobileQuery.matches);
    this.menuService.menuOpened.set(!this.menuService.isMobile());
  }

  onSidenavClosed(): void {
    this.menuService.menuOpened.set(false);
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
