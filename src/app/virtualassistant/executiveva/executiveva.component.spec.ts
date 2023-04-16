import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivevaComponent } from './executiveva.component';

describe('ExecutivevaComponent', () => {
  let component: ExecutivevaComponent;
  let fixture: ComponentFixture<ExecutivevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutivevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
