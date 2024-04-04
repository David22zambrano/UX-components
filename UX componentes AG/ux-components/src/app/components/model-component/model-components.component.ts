import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-model-components',
  templateUrl: './model-components.component.html',
  styleUrl: './model-components.component.scss',
})
export class ModelComponents {
  @Input() title!: string;

  @ContentChild('component', { static: true })
  component!: TemplateRef<HTMLElement>;
}
