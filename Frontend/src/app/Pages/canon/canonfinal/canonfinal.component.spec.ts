import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonfinalComponent } from './canonfinal.component';

describe('CanonfinalComponent', () => {
  let component: CanonfinalComponent;
  let fixture: ComponentFixture<CanonfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanonfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanonfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
