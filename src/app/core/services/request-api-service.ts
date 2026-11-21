import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type RequestApiServiceType<T> = {
  data: T | null;
  error: boolean;
  isLoading: boolean;
};

export interface RequestApiServiceInterface {
  get: <T>(apiUrl: string) => Observable<RequestApiServiceType<T>>;
}

@Injectable({ providedIn: 'root' })
export class RequestApiService implements RequestApiServiceInterface {
  readonly http = inject(HttpClient);

  public get = <T>(apiUrl: string): Observable<RequestApiServiceType<T>> => {
    return new Observable<RequestApiServiceType<T>>((subscriber) => {
      subscriber.next({ data: null, error: false, isLoading: true });

      // aplicação de um delay de 2 segundos para simular o tempo de resposta da API
      setTimeout(() => {
        this.http.get<T>(apiUrl).subscribe({
          next: (response) => {
            subscriber.next({ data: response, error: false, isLoading: false });
          },
          error: (error) => {
            subscriber.next({ data: null, error: true, isLoading: false });
          },
          complete: () => {
            subscriber.complete();
          }
        });
      }, 2000);

    });
  }

}