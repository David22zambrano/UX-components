import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-example',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipExample {
  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  // announcer = inject(LiveAnnouncer);

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.fruits.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);

  //     this.announcer.announce(`Removed ${fruit}`);
  //   }
  // }

  // edit(fruit: Fruit, event: MatChipEditedEvent) {
  //   const value = event.value.trim();

  //   // Remove fruit if it no longer has a name
  //   if (!value) {
  //     this.remove(fruit);
  //     return;
  //   }

  //   // Edit existing fruit
  //   const index = this.fruits.indexOf(fruit);
  //   if (index >= 0) {
  //     this.fruits[index].name = value;
  //   }
  // }
}
