import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone:false

})
export class AccordionComponent {
  panelOpenState = false;
  Disabled: ModelComponent[] = [
    { disabled: false },
    { disabled: false },
  ]
}
