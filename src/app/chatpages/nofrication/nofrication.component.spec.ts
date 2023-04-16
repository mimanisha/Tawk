import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofricationComponent } from './nofrication.component';

describe('NofricationComponent', () => {
  let component: NofricationComponent;
  let fixture: ComponentFixture<NofricationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NofricationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NofricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
