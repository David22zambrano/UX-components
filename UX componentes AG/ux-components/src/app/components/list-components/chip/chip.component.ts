import { Component } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  color = [
    "primary", "accent", "info", "warning", "infor", "success"
  ]
}
