import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SincoModalComponent, type } from '../modal/modal.component';

@Component({
  selector: 'app-dialog',
  standalone:false,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SincoModalComponent, {
      width: '400px',
      disableClose: false,
      data: {
        type: 'warn',
        title: 'Alerta',
        content: 'Este es un mensaje de advertencia',
        actions: 'Aceptar',
      }
    });
  }
}
