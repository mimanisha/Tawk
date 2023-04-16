import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketingvaComponent } from './digitalmarketingva.component';

describe('DigitalmarketingvaComponent', () => {
  let component: DigitalmarketingvaComponent;
  let fixture: ComponentFixture<DigitalmarketingvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalmarketingvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalmarketingvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
