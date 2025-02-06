import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  standalone:false
})
export class SwitchComponent {
  switchColor: ModelComponent[] = [
    { color: "primary", label: "primary", disabled: false },
    { color: "accent", label: "accent", disabled: false },
    { color: "warn", label: "warn",disabled: false },
    { color: "warning",label: "warning", disabled: false },
    { color: "info",label: "info", disabled: false },
    { color: "success", label: "success",disabled: true }
  ];
}
