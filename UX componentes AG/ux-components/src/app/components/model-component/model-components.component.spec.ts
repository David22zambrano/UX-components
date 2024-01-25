import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponentsComponent } from './model-components.component';

describe('ModelComponentsComponent', () => {
  let component: ModelComponentsComponent;
  let fixture: ComponentFixture<ModelComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
