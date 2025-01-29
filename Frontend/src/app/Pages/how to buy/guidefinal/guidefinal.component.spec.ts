import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidefinalComponent } from './guidefinal.component';

describe('GuidefinalComponent', () => {
  let component: GuidefinalComponent;
  let fixture: ComponentFixture<GuidefinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidefinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
