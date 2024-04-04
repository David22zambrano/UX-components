import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  filteredOptions: string[];
  options: string[] = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5', 'Menu Item 6', 'Menu Item 7', 'Menu Item 8'];
  constructor(){
    this.filteredOptions =this.options.slice()
  }
  myControl = new FormControl('');
}
