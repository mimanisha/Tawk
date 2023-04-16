import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualassistantComponent } from './virtualassistant.component';

describe('VirtualassistantComponent', () => {
  let component: VirtualassistantComponent;
  let fixture: ComponentFixture<VirtualassistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualassistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
