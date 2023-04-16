import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthservicevaComponent } from './healthserviceva.component';

describe('HealthservicevaComponent', () => {
  let component: HealthservicevaComponent;
  let fixture: ComponentFixture<HealthservicevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthservicevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthservicevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
