import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;

  constructor() { }
  // firstFormGroup: FormGroup = new FormGroup({
  //   firstCrtl: new FormControl()
  // });

  ngOnInit() {
    // this.firstFormGroup = this.formBuilder.group({
    //   firstCtrl: ['-', Validators.required]
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: [' ', Validators.required]
    // });
  }
}
