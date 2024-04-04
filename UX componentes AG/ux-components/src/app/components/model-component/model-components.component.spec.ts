import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponents } from './model-components.component';

describe('ModelComponents', () => {
  let component: ModelComponents;
  let fixture: ComponentFixture<ModelComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelComponents]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
