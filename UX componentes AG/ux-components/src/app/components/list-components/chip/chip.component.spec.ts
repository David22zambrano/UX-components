import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipExample } from './chip.component';

describe('ChipExample', () => {
  let component: ChipExample;
  let fixture: ComponentFixture<ChipExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
