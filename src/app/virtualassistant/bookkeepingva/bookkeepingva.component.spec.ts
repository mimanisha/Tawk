import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookkeepingvaComponent } from './bookkeepingva.component';

describe('BookkeepingvaComponent', () => {
  let component: BookkeepingvaComponent;
  let fixture: ComponentFixture<BookkeepingvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookkeepingvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookkeepingvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
