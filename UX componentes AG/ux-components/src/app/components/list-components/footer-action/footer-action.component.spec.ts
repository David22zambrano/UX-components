import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterActionExample } from './footer-action.component';

describe('FooterActionExample', () => {
  let component: FooterActionExample;
  let fixture: ComponentFixture<FooterActionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterActionExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterActionExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
