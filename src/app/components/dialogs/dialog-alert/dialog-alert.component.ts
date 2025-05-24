import { Component } from '@angular/core';
import { MaterialModule } from 'modules/material.module';

@Component({
  selector: 'app-dialog-alert',
  imports: [MaterialModule],
  template: `
    <mat-dialog-content>
      <p>
        Olá! Seja bem-vindo ao nosso site.
        <br />
        Pedimos desculpas pelo transtorno, mas este site está em construção.
        <br />
        Novas funcionalidades serão lançadas no decorrer do tempo. Agradecemos sua compreensão!
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Ok</button>
    </mat-dialog-actions>
  `,
  styleUrl: './dialog-alert.component.scss'
})
export class DialogAlertComponent {}
