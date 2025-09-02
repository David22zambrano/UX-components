import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type type = "warning" | "info" | "warn";

@Component({
  selector: 'app-sinco-modal',
  standalone:false,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class SincoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SincoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: type; title: string; content: string; actions: string }
  ) {}
  get estadosModal() {
    return `${this.data.type}`;
  }
  get iconType(): string {
    return this.data.type === "warn" ? "info" : this.data.type;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  emitirActionModal(): void {
    this.dialogRef.close();
  }
}
