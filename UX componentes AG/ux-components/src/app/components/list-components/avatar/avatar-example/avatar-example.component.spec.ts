import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarExampleComponent } from './avatar-example.component';

describe('AvatarExampleComponent', () => {
  let component: AvatarExampleComponent;
  let fixture: ComponentFixture<AvatarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
