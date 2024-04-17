import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})

export class RadioComponent {
  radios: ModelComponent[] = [
    { color: 'primary', checked: true, size: 'large', value: "1" },
    { color: 'accent', checked: true, size: 'large', value: "1" },
    { color: 'warn', checked: true, size: 'medium', value: "1" },
    { color: 'warning', checked: true, size: 'medium', value: "1" },
    { color: 'info', checked: true, size: 'small', value: "1" },
    { color: 'success', checked: true, size: 'small', value: "1" },
    { color: 'disabled', checked: true, size: 'small', value: "1", disabled: true },
  ];
  radioGroup: ModelComponent[] = [
    { label: "Active", checked: true, disabled: false, value: "1" },
    { label: "Primary", checked: false, disabled: false, value: "2" },
    { label: "Disabled", checked: false, disabled: true, value: "3" },
  ];
  defaultRadioChecked = "1";
}
