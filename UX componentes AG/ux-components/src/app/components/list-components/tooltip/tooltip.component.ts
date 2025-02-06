import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  standalone:false
})
export class TooltipComponent {
  Tooltips: ModelComponent[] = [
    { color: "primary" },
    { color: "success" },
    { color: "warn" },
    { color: "warning" },
  ]
}
