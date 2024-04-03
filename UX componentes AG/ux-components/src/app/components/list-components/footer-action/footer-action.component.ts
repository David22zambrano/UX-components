import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-action-example',
  templateUrl: './footer-action.component.html',
  styleUrl: './footer-action.component.scss'
})
export class FooterActionExample {
  mostrarFooter: boolean = false;

  toggleFooter() {
    this.mostrarFooter = !this.mostrarFooter;
  }

}
