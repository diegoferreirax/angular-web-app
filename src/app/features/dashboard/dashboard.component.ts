import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'modules/material.module';
import { DashboardService } from './services/dashboard-service';

@Component({
  selector: 'app-dashboard',
  imports: [
    MaterialModule,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly dashboardService = inject(DashboardService);
}
