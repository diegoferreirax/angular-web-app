import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from 'modules/material.module';

@Component({
  selector: 'app-navegation',
  imports: [RouterLink, MaterialModule, RouterLinkActive, CommonModule],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.scss'
})
export class NavegationComponent {
  @Output() closeMenuEvent = new EventEmitter<null>();

  private readonly router = inject(Router);

  protected readonly navegations = [
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

  protected onCloseMenu(): void {
    this.closeMenuEvent.emit();
  }

  protected isActiveRoute(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}
