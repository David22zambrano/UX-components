import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrl: './page-test.component.scss'
})
export class PageTestComponent {
  @ContentChild('titleSection',{static:true})titleSection!:TemplateRef<HTMLElement>;
  @ContentChild('actionsSection',{static:true})actionsSection!:TemplateRef<HTMLElement>;
}