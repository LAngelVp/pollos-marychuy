import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlitasBonelessComponent } from './alitas-boneless.component';

describe('AlitasBonelessComponent', () => {
  let component: AlitasBonelessComponent;
  let fixture: ComponentFixture<AlitasBonelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlitasBonelessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlitasBonelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
