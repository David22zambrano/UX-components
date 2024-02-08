import { Directive, ElementRef, Input, OnInit } from '@angular/core';
export type Colores = 'primary' | 'accent' | 'warn' | 'success' | 'caution' | 'warning';

@Directive({
  selector: '[colorComponent]',
})
export class ColorDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input('colorComponent') colores!: Colores;
  ngOnInit() {
    this.el.nativeElement.classList.add(this.colores);
  }
}
