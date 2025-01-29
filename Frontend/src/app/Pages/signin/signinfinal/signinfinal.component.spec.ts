import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninfinalComponent } from './signinfinal.component';

describe('SigninfinalComponent', () => {
  let component: SigninfinalComponent;
  let fixture: ComponentFixture<SigninfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
