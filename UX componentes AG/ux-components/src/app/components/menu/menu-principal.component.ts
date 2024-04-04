import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {
  showComponent: string = '/';
    menuItems = [
      { name: 'COMPONENTES', route: '/' },
      { name: 'Autocomplete', route: '/autocomplete' },
      { name: 'Button', route: '/button' },
      { name: 'Icon Button', route: '/icon' },
      { name: 'Floating Action Button', route: '/fab' },
      { name: 'Button group', route: '/buttonGroup' },
      { name: 'Checkbox', route: '/checkbox' },
      { name: 'Radio - Radio Group', route: '/radio' },
      { name: 'Rating', route: '/rating' },
      { name: 'Select', route: '/select' },
      { name: 'Slider', route: '/slider' },
      { name: 'SwitchFormControl', route: '/switchFormControl' },
      { name: 'Switch', route: '/switch' },
      { name: 'Badge', route: '/badge' },
      { name: 'Text Field', route: '/textfield' },
      { name: 'Toggle Button', route: '/toggleButton' },
      { name: 'Avatar', route: '/avatar' },
      { name: 'Chip', route: '/chip' },
      { name: 'Icon', route: '/icon' },
      { name: 'List', route: '/list' },
      { name: 'Tooltip', route: '/tooltip' },
      { name: 'Alert', route: '/alert' },
      { name: 'Progress', route: '/progress' },
      { name: 'Table', route: '/table' },
      { name: 'Accordion', route: '/accordion' }
  ];
}

