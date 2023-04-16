import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastoneComponent } from './lastone.component';

describe('LastoneComponent', () => {
  let component: LastoneComponent;
  let fixture: ComponentFixture<LastoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
