import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  checkboxs = [
    { color: "primary", size: "large" },
    { color: "primary",  size: "large" },
    { color: "accent",    size: "medium" },
    { color: "accent", size: "medium" },
    { color: "warn", size: "small" },
    { color: "warn",    size: "small" },
  ];
}
