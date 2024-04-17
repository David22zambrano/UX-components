import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';
 
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  
  colores: ModelComponent[] = [
    { size:"large",color: "disabled"},
    { size:"large",color: "primary" },
    { size:"medium",color: "accent" },
    { size:"medium",color: "warn" },
    { size:"small",color: "success" },
    { size:"small",color: "info" },
    { size:"small",color: "warning" },
  ]
}
