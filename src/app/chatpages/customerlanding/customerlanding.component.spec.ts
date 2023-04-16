import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlandingComponent } from './customerlanding.component';

describe('CustomerlandingComponent', () => {
  let component: CustomerlandingComponent;
  let fixture: ComponentFixture<CustomerlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
