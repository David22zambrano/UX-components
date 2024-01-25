import { Component } from '@angular/core';

type CustomThemePalette = 'primary' | 'accent' | 'warn';

interface radioProperties {
  color: CustomThemePalette;
  checked: boolean;
  size: string;
  value: string
}

interface radioGroupProperties {
  label: string;
  checked: boolean;
  disabled: boolean;
  value: string
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})

export class RadioComponent {
  radios: radioProperties[] = [
    { color: 'primary', checked: true, size: 'medium' , value: "1"},
    { color: 'primary', checked: true, size: 'medium' , value: "1"},
    { color: 'accent', checked: true, size: 'medium' , value: "1"},
    { color: 'accent', checked: true, size: 'medium' , value: "1"},
    { color: 'warn', checked: true, size: 'small' , value: "1"},
    { color: 'warn', checked: true, size: 'small' , value: "1"},
  ];
  radioGroup: radioGroupProperties[] = [
    { label: "Active", checked: true, disabled: false, value: "1" },
    { label: "Primary", checked: false, disabled: false, value: "2" },
    { label: "Disabled", checked: false, disabled: true, value: "3" },
  ];
  defaultRadioChecked = "1";
}
