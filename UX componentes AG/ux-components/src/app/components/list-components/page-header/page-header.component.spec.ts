import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderExample } from './page-header.component';

describe('PageHeaderExample', () => {
  let component: PageHeaderExample;
  let fixture: ComponentFixture<PageHeaderExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHeaderExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
