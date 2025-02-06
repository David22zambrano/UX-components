import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header-components',
  templateUrl: './header-components.component.html',
  styleUrl: './header-components.component.scss',
  standalone:false
})
export class HeaderComponents{
  @Input() title!: string;

  @ContentChild('component', { static: true })
  component!: TemplateRef<HTMLElement>;
}
