import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchFormControlComponent } from './switch-form-control.component';

describe('SwitchFormControlComponent', () => {
  let component: SwitchFormControlComponent;
  let fixture: ComponentFixture<SwitchFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
