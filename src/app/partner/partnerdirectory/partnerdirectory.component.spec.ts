import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerdirectoryComponent } from './partnerdirectory.component';

describe('PartnerdirectoryComponent', () => {
  let component: PartnerdirectoryComponent;
  let fixture: ComponentFixture<PartnerdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerdirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
