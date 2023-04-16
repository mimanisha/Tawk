import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealeastvaComponent } from './realeastva.component';

describe('RealeastvaComponent', () => {
  let component: RealeastvaComponent;
  let fixture: ComponentFixture<RealeastvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealeastvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealeastvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
