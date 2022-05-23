import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftAccessoryComponent } from './hard-soft-accessory.component';

describe('HardSoftAccessoryComponent', () => {
  let component: HardSoftAccessoryComponent;
  let fixture: ComponentFixture<HardSoftAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
