import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastNotificationProperties, ToastNotificationService } from '@sinco/angular';

@Component({
  selector: 'app-toast-example',
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss'
})
export class ToastNotificationComponent implements OnInit {

  @ViewChild('aditionalData', { static: true }) child!: TemplateRef<any>;

  show!: boolean
  listItems: string[] = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8'
  ]

  constructor(private toast: ToastNotificationService) { }

  ngOnInit(): void {
    const toastData: ToastNotificationProperties = {
      title: 'Titlte',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia',
      type: 'info',
      aditionalContent: this.child
    }
    this.toast.openToastNotificationComponent(15000, toastData)
  }

  alertMessage(): void {
    alert('funcion personalizada e invocada con eventos')
  }
}
