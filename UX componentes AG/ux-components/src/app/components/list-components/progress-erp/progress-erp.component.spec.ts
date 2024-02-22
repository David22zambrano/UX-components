import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressERP} from './progress-erp.component';

describe('ProgressERP', () => {
  let component: ProgressERP;
  let fixture: ComponentFixture<ProgressERP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressERP]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressERP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
