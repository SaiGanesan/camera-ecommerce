import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikonCameraComponent } from './nikon-camera.component';

describe('NikonCameraComponent', () => {
  let component: NikonCameraComponent;
  let fixture: ComponentFixture<NikonCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikonCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikonCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
