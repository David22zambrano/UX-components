import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-example',
  templateUrl: './progress-example.component.html',
  styleUrl: './progress-example.component.scss'
})
// implements OnInit
export class ProgressExampleComponent  {
  @Input() loadingText!: string;
  @Input() progressIndicator!: string;
  @Input() value: number = 0;
  @Input() variant: "determinate" | "indeterminate" = "determinate" ;

  progress: number = 0;

  ngOnInit() {
    this.fillProgress();
  }

  fillProgress() {
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(interval);
      }
    }, 50);
  }
}
