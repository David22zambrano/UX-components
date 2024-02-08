import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


type CustomThemePalette = 'primary' | 'accent' | 'warn' ;

interface colorOptions {
  color: CustomThemePalette
}
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  colores: colorOptions[] = [
    { color: "primary" }, { color: "accent" }, { color: "warn" }, 
  ]

}
