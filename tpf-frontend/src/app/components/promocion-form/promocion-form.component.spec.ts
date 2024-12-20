import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionFormComponent } from './promocion-form.component';

describe('PromocionFormComponent', () => {
  let component: PromocionFormComponent;
  let fixture: ComponentFixture<PromocionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
