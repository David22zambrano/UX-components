import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sinco-adjuntar',
  standalone:false,
  templateUrl: './sinco-adjuntar.component.html',
  styleUrl: './sinco-adjuntar.component.scss'
})
export class SincoAdjuntarComponent {
  constructor(){}

  @Input() compact: boolean = true
  @Input() width: string = "500px"

  selectedFile: { name: string; size: string } | null = null;
  fileUrl: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const fileSize = file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(2)} KB`
        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

      this.selectedFile = { name: file.name, size: fileSize };

      this.fileUrl = URL.createObjectURL(file);
    }
  }

  openFile(event: Event) {
    event.preventDefault();
    if (this.fileUrl) {
      window.open(this.fileUrl, '_blank'); 
    }
  }

  ngOnDestroy() {
    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl);
    }
  }

  get fileName(): string {
    return this.selectedFile ? this.selectedFile.name : 'Archivo no seleccionado';
  }
  get estilosDinamicos() {
    return {
      'flex-direction': this.compact ? 'row' : 'column',
      'justify-content': this.compact? 'space-between': 'center',
      'min-height': this.compact ? null : '100px',
      'min-width': this.compact ? null : '200px',
      'width': this.width
    };
  }
}
