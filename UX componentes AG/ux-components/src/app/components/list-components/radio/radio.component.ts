import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})

export class RadioComponent {
  radios: ModelComponent[] = [
    { color: 'primary', checked: true, size: 'medium', value: "1" },
    { color: 'primary', checked: true, size: 'medium', value: "1" },
    { color: 'accent', checked: true, size: 'medium', value: "1" },
    { color: 'accent', checked: true, size: 'medium', value: "1" },
    { color: 'warning', checked: true, size: 'small', value: "1" },
    { color: 'warn', checked: true, size: 'small', value: "1" },
  ];
  radioGroup: ModelComponent[] = [
    { label: "Active", checked: true, disabled: false, value: "1" },
    { label: "Primary", checked: false, disabled: false, value: "2" },
    { label: "Disabled", checked: false, disabled: true, value: "3" },
  ];
  defaultRadioChecked = "1";
}
