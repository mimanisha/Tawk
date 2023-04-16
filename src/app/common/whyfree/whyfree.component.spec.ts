import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyfreeComponent } from './whyfree.component';

describe('WhyfreeComponent', () => {
  let component: WhyfreeComponent;
  let fixture: ComponentFixture<WhyfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyfreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
