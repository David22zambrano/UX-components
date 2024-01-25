import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  
  buttons: { label: string, color: string, size: string, disabled: boolean }[] = [

    { label: 'Primary', color: 'primary', size: "large", disabled: false },
    { label: 'Accent', color: 'accent', size: "large", disabled: false },
    { label: 'Warn', color: 'warn', size: "medium", disabled: false },
    { label: 'Success', color: 'success', size: 'medium', disabled: false },
    { label: 'Warning', color: 'warning', size: 'small', disabled: false },
    { label: 'Disabled', color: 'info', size: 'small', disabled: true },
  ];

}
