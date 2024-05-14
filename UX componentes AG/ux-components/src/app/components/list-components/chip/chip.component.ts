// export interface ModelComponent {
//   label?: string,
//   disabled?: boolean,
//   size?: string,
//   color?: PalleteTheme | CustomThemePalette | any,
//   value?: string | number,
//   checked?: boolean,
//   selected?: boolean;
// }
import { Component } from '@angular/core';
import { ModelComponent } from '../../model/model';



@Component({
  selector: 'app-chip-example',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipExample {
  Chips: ModelComponent[] = [
    { color: 'primary'},
    { color: 'accent'},
    { color: 'warn'},
    { color: 'success'},
    { color: 'warning'},
    { color: 'info'},
  ];
}
