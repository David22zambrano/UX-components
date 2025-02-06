import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-action-example',
  templateUrl: './footer-action.component.html',
  styleUrl: './footer-action.component.scss',
  standalone:false
})
export class FooterActionExample {
  mostrarFooter: boolean = false;

  toggleFooter() {
    this.mostrarFooter = !this.mostrarFooter;
  }

}
