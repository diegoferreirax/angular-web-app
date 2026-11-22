import { Component, effect, inject, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MaterialModule } from 'modules/material.module';
import { Client } from './types/client.type';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ClientController } from './controller/client-controller';

@Component({
  selector: 'app-client',
  imports: [MaterialModule],
  templateUrl: './client.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  readonly clientController = inject(ClientController);
  readonly liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  readonly columnLabels: Record<keyof Client, string> = {
    name: 'Nome',
    cpf: 'CPF',
    birthDate: 'Nascimento',
    age: 'Idade',
    registrationDate: 'Cadastro'
  };

  dataSource = new MatTableDataSource<Client>([]);
  dataColumns: (keyof Client)[] = [];

  constructor() {
    effect(() => {
      this.dataSource.data = this.clientController.getClientsResponse().data || [];
      this.dataColumns = this.dataSource.data.length > 0 ? Object.keys(this.dataSource.data[0]) as (keyof Client)[] : [];
    });
  }

  ngOnInit() {
    this.clientController.getClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public sortClientChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
}