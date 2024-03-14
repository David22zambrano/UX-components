import { Component } from '@angular/core';

interface formfieldModel {
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  panelOpenState = false;

  formData: formfieldModel[] = [
    {label: '', placeholder: ''},
  ]
   
}
