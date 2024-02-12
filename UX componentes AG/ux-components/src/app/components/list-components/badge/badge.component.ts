import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  colores: ModelComponent[] = [
    { color: "primary" },
    { color: "accent" },
    { color: "warn" },
    { color: "success" },
    { color: "info" },
    { color: "warning" },
  ]
}
