import { Component } from '@angular/core';
import { AngularModule } from '@sinco/angular';

@Component({
  selector: 'app-rating-example',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './rating-example.component.html',
  styleUrl: './rating-example.component.scss'
})
export class RatingExampleComponent { }
