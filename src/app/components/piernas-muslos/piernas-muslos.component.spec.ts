import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernasMuslosComponent } from './piernas-muslos.component';

describe('PiernasMuslosComponent', () => {
  let component: PiernasMuslosComponent;
  let fixture: ComponentFixture<PiernasMuslosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiernasMuslosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiernasMuslosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
