import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  icons: ModelComponent[] = [
    { size: "large" },
    { size: "medium" },
    { size: "small" },
    { size: "small" }
  ]
}
