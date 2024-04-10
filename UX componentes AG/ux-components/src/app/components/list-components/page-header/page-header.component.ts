import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header-example',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderExample {
  mostrarPage: boolean = false;

  togglePage() {
    this.mostrarPage = !this.mostrarPage;
  }

}
