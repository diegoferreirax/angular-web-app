import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from 'components/dialogs/dialog-alert/dialog-alert.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MaterialModule } from 'modules/material.module';
import { NavegationComponent } from './navegation/navegation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'layout',
  imports: [
    RouterOutlet,
    MaterialModule,
    CommonModule,
    NavegationComponent,
    ToolbarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('snav') snav!: MatSidenav;

  protected readonly isMobile = signal(true);
  private readonly dialog = inject(MatDialog);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  openDialog(): void {
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

  onCloseMenu(): void {
    if (this.isMobile()) {
      this.snav.close();
    }
  }

  ngAfterViewInit(): void {
    this.openDialog();
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
