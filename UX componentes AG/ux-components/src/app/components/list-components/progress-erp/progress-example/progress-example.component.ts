import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-example',
  templateUrl: './progress-example.component.html',
  styleUrl: './progress-example.component.scss'
})
export class ProgressExampleComponent {
  @Input() showLogo: boolean = false;
  @Input() loadingText: string | any;
  @Input() progressIndicator: string | any;
  @Input() value: number = 0;
  @Input() variant: "determinate" | "indeterminate" | undefined;

  progressValue: number = 0;

  ngOnInit() {
    this.fillProgress();
  }

  fillProgress() {
    const interval = setInterval(() => {
      this.progressValue += 1;
      if (this.progressValue >= 100) {
        clearInterval(interval);
      }
    }, 50);
  }
}
