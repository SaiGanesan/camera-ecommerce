import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotlistedComponent } from './notlisted.component';

describe('NotlistedComponent', () => {
  let component: NotlistedComponent;
  let fixture: ComponentFixture<NotlistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotlistedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
