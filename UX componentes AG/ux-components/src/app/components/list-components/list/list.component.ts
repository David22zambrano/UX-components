import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone:false
})

export class ListComponent {
  // folders: Section[] = [
  //   {
  //     name: 'List item',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'List item',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'List item',
  //     updated: new Date('1/28/16'),
  //   },
  // ];
  // notes: Section[] = [
  //   {
  //     name: 'Vacation Itinerary',
  //     updated: new Date('2/20/16'),
  //   },
  //   {
  //     name: 'Kitchen Remodel',
  //     updated: new Date('1/18/16'),
  //   },
  // ];
}
