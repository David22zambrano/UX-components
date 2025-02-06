import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  standalone:false
})
export class CheckboxComponent {
  checkboxs: ModelComponent[] = [
    { color: 'primary', checked: true, size: 'large', disabled: false },
    { color: 'accent', checked: true, size: 'large', disabled: false },
    { color: 'warn', checked: true, size: 'medium', disabled: false },
    { color: 'warning', checked: true, size: 'medium', disabled: false },
    { color: 'info', checked: true, size: 'small', disabled: false },
    { color: 'success', checked: true, size: 'small', disabled: false },
    { color: 'disabled', checked: false, size: 'small', disabled: true },
  ];
}
