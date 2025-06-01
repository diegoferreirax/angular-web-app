import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'modules/material.module';

@Component({
  selector: 'app-toolbar',
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() isMobile: boolean = false;
  @Output() toggleMenuEvent = new EventEmitter<null>();

  protected username: string = 'User';
  protected isLightTheme: boolean = false;

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('light-mode', this.isLightTheme);
  }

  onToggleMenuEvent(): void {
    this.toggleMenuEvent.emit();
  }
}
