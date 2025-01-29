import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyfinalComponent } from './sonyfinal.component';

describe('SonyfinalComponent', () => {
  let component: SonyfinalComponent;
  let fixture: ComponentFixture<SonyfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonyfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
