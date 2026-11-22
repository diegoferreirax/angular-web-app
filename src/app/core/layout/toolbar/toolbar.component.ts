
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from 'core/services/menu-service';
import { MaterialModule } from 'modules/material.module';

@Component({
  selector: 'app-toolbar',
  imports: [MaterialModule, RouterLink],
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  protected readonly menuService = inject(MenuService);

  protected readonly username: string = 'User';
  protected isLightTheme: boolean = false;

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('light-mode', this.isLightTheme);
  }
}
