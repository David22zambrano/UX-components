import { Component } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss'
})
export class FabComponent {

  buttons: { color: string, size: string, disabled: boolean }[] = [
    { color: 'disabled', size: "large", disabled: true },
    { color: 'primary', size: "large", disabled: false },
    { color: 'warn', size: "medium", disabled: false },
    { color: 'disabled', size: 'medium', disabled: true }
  ];
  
}
