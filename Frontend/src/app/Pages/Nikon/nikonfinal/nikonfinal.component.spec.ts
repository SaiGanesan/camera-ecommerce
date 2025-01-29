import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikonfinalComponent } from './nikonfinal.component';

describe('NikonfinalComponent', () => {
  let component: NikonfinalComponent;
  let fixture: ComponentFixture<NikonfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikonfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikonfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
