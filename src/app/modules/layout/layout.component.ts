import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from 'components/dialogs/dialog-alert/dialog-alert.component';
import { MaterialModule } from 'modules/material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'layout',
  imports: [RouterOutlet, RouterLink, MaterialModule, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('snav') snav!: MatSidenav;

  protected readonly fillerNav = [
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

  protected readonly fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  protected readonly isMobile = signal(true);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  protected isLightTheme: boolean = false;
  protected username: string = 'User';

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  openDialog() {
    const dialogAlert = sessionStorage.getItem('dialogAlert');
    if (!dialogAlert) {
      this.dialog.open(DialogAlertComponent, {
        width: '620px'
      });
      this.dialog.afterAllClosed.subscribe(() => {
        sessionStorage.setItem('dialogAlert', 'closed');
      });
    }
  }

  onCloseMenu = () => {
    if (this.isMobile()) {
      this.snav.close();
    }
  };

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('light-mode', this.isLightTheme);
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  ngAfterViewInit(): void {
    this.openDialog();
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
