import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercevaComponent } from './ecommerceva.component';

describe('EcommercevaComponent', () => {
  let component: EcommercevaComponent;
  let fixture: ComponentFixture<EcommercevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
