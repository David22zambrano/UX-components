import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // Removed FormsModule import

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'] // Corrected styleUrl to styleUrls
})
export class StepperComponent {
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private formBuilder: FormBuilder) {}
}
