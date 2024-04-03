import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-footer-test',
  templateUrl: './footer-actions.component.html',
  styleUrls: ['./footer-actions.component.scss']
})
export class FooterActionTest {
  
  @ContentChild('leftSection',{static:true})leftSection!:TemplateRef<any>;
  @ContentChild('rightSection',{static:true})rightSection!:TemplateRef<any>;

}
