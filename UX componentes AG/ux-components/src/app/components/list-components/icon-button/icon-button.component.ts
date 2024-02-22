import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  iconButtons: ModelComponent[] = [
    { label: 'Primary', color: 'primary', size: "large", disabled: false },
    { label: 'Accent', color: 'accent', size: "large", disabled: false },
    { label: 'Warn', color: 'warn', size: "medium", disabled: false },
    { label: 'Success', color: 'success', size: 'medium', disabled: false },
    { label: 'Warning', color: 'warning', size: 'small', disabled: false },
    { label: 'Disabled', color: 'disabled', size: 'small', disabled: true },
  ];
}
