import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  @ViewChild('justifiedText') justifiedTextElement!: ElementRef;

  alignmentMap: { [key: string]: string } = {
    'left': 'left',
    'center': 'center',
    'right': 'right'
  };

  justifyText(event: { value: string }) {
    const value = event.value;
    const textElement = this.justifiedTextElement.nativeElement;
    textElement.style.textAlign = this.alignmentMap[value];
  }
}
