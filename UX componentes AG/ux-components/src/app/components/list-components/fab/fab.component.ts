import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss'
})
export class FabComponent {
  fabButtons: ModelComponent[] = [
    // { color: 'disabled', size: "large", disabled: true },
    { color: 'primary', size: "large", disabled: false },
    { color: 'accent', size: "medium", disabled: false },
    { color: 'warn', size: "large", disabled: false },
    { color: 'warning', size: "medium", disabled: false },
    { color: 'success', size: "large", disabled: false },
    { color: 'info', size: "medium", disabled: false },
    { color: 'disabled', size: 'medium', disabled: true }
  ];
}
