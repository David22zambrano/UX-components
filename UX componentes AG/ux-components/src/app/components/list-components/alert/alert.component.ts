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
  styleUrl: './alert.component.scss',
  standalone:false
})

export class AlertComponent {
  alertError: alertModel[] = [
    
    { title: "Title", type: "error", content: "Alert content", mode: "filled" },
    { title: "Title", type: "error", content: "Alert content", mode: "outlined" },
    { title: "Title", type: "error", content: "Alert content", mode: "standard" },
  ];

  alertWarning: alertModel[] = [
    { title: "Title", type: "warning", content: "Alert content", mode: "filled" },
    { title: "Title", type: "warning", content: "Alert content", mode: "outlined" },
    { title: "Title", type: "warning", content: "Alert content", mode: "standard" },
  ];

  alertInfo: alertModel[] = [
    { title: "Title", type: "info", content: "Alert content", mode: "filled" },
    { title: "Title", type: "info", content: "Alert content", mode: "outlined" },
    { title: "Title", type: "info", content: "Alert content", mode: "standard" },
  ];

  alertSuccess: alertModel[] = [
    { title: "Title", type: "success", content: "Alert content", mode: "filled" },
    { title: "Title", type: "success", content: "Alert content", mode: "outlined" },
    { title: "Title", type: "success", content: "Alert content", mode: "standard" },
  ];

}
