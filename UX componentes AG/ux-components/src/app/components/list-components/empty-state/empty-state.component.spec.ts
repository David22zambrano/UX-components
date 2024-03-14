import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateExample } from './empty-state.component';

describe('EmptyStateExample', () => {
  let component: EmptyStateExample;
  let fixture: ComponentFixture<EmptyStateExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyStateExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
