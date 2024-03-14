import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  panelOpenState = false;
  Disabled: ModelComponent[] = [
    { disabled: false },
    { disabled: false },
  ]
}
