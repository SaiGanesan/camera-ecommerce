import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartfinalComponent } from './cartfinal.component';

describe('CartfinalComponent', () => {
  let component: CartfinalComponent;
  let fixture: ComponentFixture<CartfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
