import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-action-example',
  templateUrl: './footer-action.component.html',
  styleUrl: './footer-action.component.scss'
})
export class FooterActionExample {
  @Input() state: boolean = true;

  toggleFooter() {
    return this.state == !this.state;
  }
  
  get handleFooterActions() {
    return this.state
    ? 'footer-animation__show'
    : 'footer-animation__hidden';
  }

}
