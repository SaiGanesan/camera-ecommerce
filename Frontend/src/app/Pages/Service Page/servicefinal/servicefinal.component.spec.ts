import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefinalComponent } from './servicefinal.component';

describe('ServicefinalComponent', () => {
  let component: ServicefinalComponent;
  let fixture: ComponentFixture<ServicefinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicefinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
