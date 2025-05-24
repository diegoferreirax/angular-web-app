import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../modules/material.module';

@Component({
  selector: 'app-dialog-alert',
  imports: [MaterialModule],
  templateUrl: './dialog-alert.component.html',
  styleUrl: './dialog-alert.component.scss'
})
export class DialogAlertComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAlertComponent>);

  close() {
    this.dialogRef.close();
  }
}
