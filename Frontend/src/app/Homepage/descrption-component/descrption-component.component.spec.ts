import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrptionComponentComponent } from './descrption-component.component';

describe('DescrptionComponentComponent', () => {
  let component: DescrptionComponentComponent;
  let fixture: ComponentFixture<DescrptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescrptionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
