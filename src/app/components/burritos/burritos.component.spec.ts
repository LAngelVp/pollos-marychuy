import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritosComponent } from './burritos.component';

describe('BurritosComponent', () => {
  let component: BurritosComponent;
  let fixture: ComponentFixture<BurritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
