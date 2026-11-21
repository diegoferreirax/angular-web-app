import { inject, Injectable, signal } from '@angular/core';
import { RequestApiServiceType } from 'core/services/request-api-service';
import { ClientService } from '../services/client-service';
import { Client } from '../types/client.type';

@Injectable({ providedIn: 'root' })
export class ClientController {
  clientService = inject(ClientService);

  readonly getClientsResponse = signal<RequestApiServiceType<Client[]>>({
    data: null,
    error: false,
    isLoading: false,
  });

  public getClients = (): void => {
    this.clientService.getClients().subscribe((clients) => {
      this.getClientsResponse.set({
        data: clients.data,
        error: clients.error,
        isLoading: clients.isLoading,
      });

      if (clients.error) {
        console.error('Error fetching clients');
      }
    });
  }

}
