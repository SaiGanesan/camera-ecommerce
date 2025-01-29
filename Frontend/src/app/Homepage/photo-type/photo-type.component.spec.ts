import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTypeComponent } from './photo-type.component';

describe('PhotoTypeComponent', () => {
  let component: PhotoTypeComponent;
  let fixture: ComponentFixture<PhotoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
