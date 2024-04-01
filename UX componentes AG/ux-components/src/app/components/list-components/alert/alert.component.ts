import { Component } from '@angular/core';
import { ModeAlert, TypeAlerts } from '@sinco/angular';


interface alertModel {
  title: string;
  type: TypeAlerts;
  mode: ModeAlert;
  content: HTMLElement | string | undefined;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})

export class AlertComponent {
  alertStandard: alertModel[] = [
    ...Array(3).fill({
      title: "Title",
      type: "info",
      content: "Alert content",
      mode: "standard"
    }),
  ];
}
