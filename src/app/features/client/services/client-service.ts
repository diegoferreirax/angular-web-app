import { inject, Injectable } from '@angular/core';
import { Client } from '../types/client.type';
import { RequestApiService, RequestApiServiceType } from 'core/services/request-api-service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientService {
  requestApiService = inject(RequestApiService);

  public getClients = (): Observable<RequestApiServiceType<Client[]>> => {
    // return this.requestApiService.get<Client[]>(`${environment.urlApi}/clients`);

    // codigo de teste para simular a resposta da API
    return new Observable<RequestApiServiceType<Client[]>>((subscriber) => {
      subscriber.next({ data: ELEMENT_DATA, error: false, isLoading: false });
    });
  }
}

export const ELEMENT_DATA: Client[] = Array.from({ length: 100 }, (_, index) => {
  const number = index + 1;
  const digits = String(number).padStart(11, '0');
  const now = new Date();
  const monthsAgo = index < 12 ? 0 : 1 + (index % 11);
  const registrationDate = new Date(
    now.getFullYear(),
    now.getMonth() - monthsAgo,
    1 + (index % 28)
  );

  return {
    name: `Cliente ${String(number).padStart(3, '0')}`,
    cpf: `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`,
    birthDate: `${1960 + (index % 50)}-${String((index % 12) + 1).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`,
    age: 2026 - (1960 + (index % 50)),
    registrationDate: [
      registrationDate.getFullYear(),
      String(registrationDate.getMonth() + 1).padStart(2, '0'),
      String(registrationDate.getDate()).padStart(2, '0')
    ].join('-')
  };
});
