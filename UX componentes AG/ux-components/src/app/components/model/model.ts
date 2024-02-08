import { ThemePalette } from "@angular/material/core";

export type CustomThemePalette = 'primary' | 'accent' | 'warn' | 'warning' | 'info' | 'success';
export type PalleteTheme = ThemePalette;

export interface ModelComponent {
    label?: string,
    disabled?: boolean,
    size?: string,
    color?: PalleteTheme | CustomThemePalette | any,
    value?: string | number,
    checked?: boolean,
}

