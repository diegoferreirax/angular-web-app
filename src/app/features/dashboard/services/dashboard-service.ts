import { effect, inject, Injectable } from '@angular/core';
import { ClientController } from '../../client/controller/client-controller';
import { Client } from '../../client/types/client.type';
import { DashboardItem } from '../types/dashboard.type';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly clientController = inject(ClientController);

  dashboardsItems: DashboardItem[] = [
    {
      title: 'Total de clientes',
      value: '-',
      routerName: 'Ver clientes',
      routerLink: '/clients',
      icon: 'groups'
    },
    {
      title: 'Novos no mês',
      value: '-',
      icon: 'calendar_month'
    },
    {
      title: 'Idade média',
      value: '-',
      icon: 'monitoring'
    },
    {
      title: 'Último cadastro',
      value: '-',
      icon: 'how_to_reg'
    }
  ];

  constructor() {
    this.clientController.getClients();

    effect(() => {
      const response = this.clientController.getClientsResponse();
      if (response.isLoading) {
        return;
      }

      this.updateItems(response.data ?? []);
    });
  }

  private updateItems(clients: Client[]): void {
    const now = new Date();
    const newThisMonth = clients.filter((client) => {
      const registrationDate = this.parseDate(client.registrationDate);
      return registrationDate.getFullYear() === now.getFullYear()
        && registrationDate.getMonth() === now.getMonth();
    }).length;

    const averageAge = clients.length
      ? Math.round(clients.reduce((total, client) => total + client.age, 0) / clients.length)
      : 0;

    const latestRegistration = clients
      .map((client) => client.registrationDate)
      .filter(Boolean)
      .sort()
      .at(-1);

    this.dashboardsItems = [
      {
        title: 'Total de clientes',
        value: String(clients.length),
        routerName: 'Ver clientes',
        routerLink: '/clients',
        icon: 'groups'
      },
      {
        title: 'Novos no mês',
        value: String(newThisMonth),
        icon: 'calendar_month'
      },
      {
        title: 'Idade média',
        value: `${averageAge} anos`,
        icon: 'monitoring'
      },
      {
        title: 'Último cadastro',
        value: latestRegistration
          ? this.parseDate(latestRegistration).toLocaleDateString('pt-BR')
          : 'Nenhum cadastro',
        icon: 'how_to_reg'
      }
    ];
  }

  private parseDate(value: string): Date {
    return new Date(`${value}T12:00:00`);
  }
}
