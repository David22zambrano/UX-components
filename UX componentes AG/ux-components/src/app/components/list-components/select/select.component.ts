import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone:false
})
export class SelectComponent {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
