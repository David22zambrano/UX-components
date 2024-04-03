import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterActionTest } from './footer-actions.component';

describe('FooterActionTest', () => {
  let component: FooterActionTest;
  let fixture: ComponentFixture<FooterActionTest>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterActionTest]
    });
    fixture = TestBed.createComponent(FooterActionTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
