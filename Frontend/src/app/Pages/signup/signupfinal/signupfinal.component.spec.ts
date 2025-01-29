import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupfinalComponent } from './signupfinal.component';

describe('SignupfinalComponent', () => {
  let component: SignupfinalComponent;
  let fixture: ComponentFixture<SignupfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
