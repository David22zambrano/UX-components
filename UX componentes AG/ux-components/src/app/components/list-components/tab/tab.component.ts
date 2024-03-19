import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  activeTabIndex: number = 0;
  history: number[] = [0];

  constructor() { }

  selectTab(index: number): void {
    this.activeTabIndex = index;
    this.history.push(index);
  }

  goBack(): void {
    if (this.history.length > 1) {
      this.history.pop();
      this.activeTabIndex = this.history[this.history.length - 1];
    }
  }

  goForward(): void {
    const nextTab = this.history[this.history.length - 1] + 1;
    if (nextTab < 3) { // Cambia 3 por el número total de pestañas
      this.selectTab(nextTab);
    }
  }
}
