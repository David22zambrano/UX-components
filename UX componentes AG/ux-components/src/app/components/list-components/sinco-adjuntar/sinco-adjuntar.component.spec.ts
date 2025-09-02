import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SincoAdjuntarComponent } from './sinco-adjuntar.component';

describe('SincoAdjuntarComponent', () => {
  let component: SincoAdjuntarComponent;
  let fixture: ComponentFixture<SincoAdjuntarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SincoAdjuntarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SincoAdjuntarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
