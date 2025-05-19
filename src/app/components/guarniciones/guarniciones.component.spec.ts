import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarnicionesComponent } from './guarniciones.component';

describe('GuarnicionesComponent', () => {
  let component: GuarnicionesComponent;
  let fixture: ComponentFixture<GuarnicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarnicionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuarnicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
